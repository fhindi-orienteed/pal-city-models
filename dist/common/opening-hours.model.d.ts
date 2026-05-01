export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type TimeRange = {
    open: string;
    close: string;
};
export type SpecialDay = {
    date: string;
    ranges: TimeRange[];
};
export type OpeningHoursConfig = {
    schedule: Partial<Record<DayOfWeek, TimeRange[]>>;
    timezone?: string;
    specialDays?: SpecialDay[];
};
export declare class OpeningHours {
    private schedule;
    private timezone;
    private specialDays;
    constructor(config: OpeningHoursConfig);
    isOpen(date?: Date): boolean;
    getNextOpen(date?: Date): Date | null;
    addRange(day: DayOfWeek, open: string, close: string): void;
    addSpecialDay(date: string, ranges: TimeRange[]): void;
    private isWithinRange;
    private validate;
    private validateRange;
    private parseTime;
    private toMinutes;
    private getDayName;
    private formatDate;
    private toLocalDate;
}
