export class EntitySummary {
    status: Record<string, number> = {};
    [key: string]: {
        status: Record<string, number>;
        type: Record<string, number>;
    } | any;
}