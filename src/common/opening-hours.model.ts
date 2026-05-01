export type DayOfWeek =
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";

export type TimeRange = {
    open: string;   // "HH:mm"
    close: string;  // "HH:mm"
};

export type SpecialDay = {
    date: string; // "YYYY-MM-DD"
    ranges: TimeRange[]; // empty = closed
};

export type OpeningHoursConfig = {
    schedule: Partial<Record<DayOfWeek, TimeRange[]>>;
    timezone?: string; // e.g. "Asia/Jerusalem"
    specialDays?: SpecialDay[];
};

export class OpeningHours {
    private schedule: Record<DayOfWeek, TimeRange[]>;
    private timezone: string;
    private specialDays: Map<string, TimeRange[]>;

    constructor(config: OpeningHoursConfig) {
        this.schedule = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            ...config.schedule,
        };

        this.timezone = config.timezone || "UTC";

        this.specialDays = new Map();
        (config.specialDays || []).forEach(d => {
            this.specialDays.set(d.date, d.ranges);
        });

        this.validate();
    }

    // -----------------------
    // PUBLIC METHODS
    // -----------------------

    isOpen(date: Date = new Date()): boolean {
        const local = this.toLocalDate(date);
        const dateKey = this.formatDate(local);

        const ranges =
            this.specialDays.get(dateKey) ??
            this.schedule[this.getDayName(local)];

        const now = this.toMinutes(local.getHours(), local.getMinutes());

        return ranges.some(range => this.isWithinRange(now, range));
    }

    getNextOpen(date: Date = new Date()): Date | null {
        let check = new Date(date);

        for (let i = 0; i < 7; i++) {
            const local = this.toLocalDate(check);
            const dateKey = this.formatDate(local);

            const ranges =
                this.specialDays.get(dateKey) ??
                this.schedule[this.getDayName(local)];

            if (ranges.length > 0) {
                const first = ranges[0];

                const [h, m] = first?.open?.split(":").map(Number);

                const next = new Date(local);
                next.setHours(h, m, 0, 0);

                if (next > date) return next;
            }

            check.setDate(check.getDate() + 1);
        }

        return null;
    }

    addRange(day: DayOfWeek, open: string, close: string) {
        this.validateRange(open, close);
        this.schedule[day].push({ open, close });
    }

    addSpecialDay(date: string, ranges: TimeRange[]) {
        ranges.forEach(r => this.validateRange(r.open, r.close));
        this.specialDays.set(date, ranges);
    }

    // -----------------------
    // CORE LOGIC
    // -----------------------

    private isWithinRange(now: number, range: TimeRange): boolean {
        const open = this.parseTime(range.open);
        const close = this.parseTime(range.close);

        // Normal range
        if (open <= close) {
            return now >= open && now <= close;
        }

        // Overnight range (e.g. 22:00 → 03:00)
        return now >= open || now <= close;
    }

    // -----------------------
    // VALIDATION
    // -----------------------

    private validate() {
        Object.values(this.schedule).forEach(ranges =>
            ranges.forEach(r => this.validateRange(r.open, r.close))
        );
    }

    private validateRange(open: string, close: string) {
        if (!/^\d{2}:\d{2}$/.test(open) || !/^\d{2}:\d{2}$/.test(close)) {
            throw new Error(`Invalid time format: ${open} - ${close}`);
        }
    }

    // -----------------------
    // HELPERS
    // -----------------------

    private parseTime(time: string): number {
        const [h, m] = time.split(":").map(Number);
        return this.toMinutes(h, m);
    }

    private toMinutes(h: number, m: number): number {
        return h * 60 + m;
    }

    private getDayName(date: Date): DayOfWeek {
        const days: DayOfWeek[] = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
        ];
        return days[date.getDay()];
    }

    private formatDate(date: Date): string {
        return date.toISOString().split("T")[0];
    }

    private toLocalDate(date: Date): Date {
        return new Date(
            date.toLocaleString("en-US", { timeZone: this.timezone })
        );
    }
}