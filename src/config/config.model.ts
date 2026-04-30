export default class ConfigModel {
    id: number;
    group: string;
    namespace: string;
    key: string;
    type: string;
    value: string;
    title?: string;
    description?: string;

    constructor(data: any) {
        this.id = data.id;
        this.group = data.group;
        this.namespace = data.namespace;
        this.key = data.key;
        this.type = data.type;
        this.value = data.value;
        this.title = data.title;
        this.description = data.description;
    }
}