export class OpeningHours {
    constructor(config) {
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
    isOpen(date = new Date()) {
        var _a;
        const local = this.toLocalDate(date);
        const dateKey = this.formatDate(local);
        const ranges = (_a = this.specialDays.get(dateKey)) !== null && _a !== void 0 ? _a : this.schedule[this.getDayName(local)];
        const now = this.toMinutes(local.getHours(), local.getMinutes());
        return ranges.some(range => this.isWithinRange(now, range));
    }
    getNextOpen(date = new Date()) {
        var _a, _b;
        let check = new Date(date);
        for (let i = 0; i < 7; i++) {
            const local = this.toLocalDate(check);
            const dateKey = this.formatDate(local);
            const ranges = (_a = this.specialDays.get(dateKey)) !== null && _a !== void 0 ? _a : this.schedule[this.getDayName(local)];
            if (ranges.length > 0) {
                const first = ranges[0];
                const [h, m] = (_b = first === null || first === void 0 ? void 0 : first.open) === null || _b === void 0 ? void 0 : _b.split(":").map(Number);
                const next = new Date(local);
                next.setHours(h, m, 0, 0);
                if (next > date)
                    return next;
            }
            check.setDate(check.getDate() + 1);
        }
        return null;
    }
    addRange(day, open, close) {
        this.validateRange(open, close);
        this.schedule[day].push({ open, close });
    }
    addSpecialDay(date, ranges) {
        ranges.forEach(r => this.validateRange(r.open, r.close));
        this.specialDays.set(date, ranges);
    }
    // -----------------------
    // CORE LOGIC
    // -----------------------
    isWithinRange(now, range) {
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
    validate() {
        Object.values(this.schedule).forEach(ranges => ranges.forEach(r => this.validateRange(r.open, r.close)));
    }
    validateRange(open, close) {
        if (!/^\d{2}:\d{2}$/.test(open) || !/^\d{2}:\d{2}$/.test(close)) {
            throw new Error(`Invalid time format: ${open} - ${close}`);
        }
    }
    // -----------------------
    // HELPERS
    // -----------------------
    parseTime(time) {
        const [h, m] = time.split(":").map(Number);
        return this.toMinutes(h, m);
    }
    toMinutes(h, m) {
        return h * 60 + m;
    }
    getDayName(date) {
        const days = [
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
    formatDate(date) {
        return date.toISOString().split("T")[0];
    }
    toLocalDate(date) {
        return new Date(date.toLocaleString("en-US", { timeZone: this.timezone }));
    }
}
