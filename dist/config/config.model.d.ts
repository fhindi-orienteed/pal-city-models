export default class ConfigModel {
    id: number;
    group: string;
    namespace: string;
    key: string;
    value: string;
    title?: string;
    description?: string;
    constructor(data: any);
}
