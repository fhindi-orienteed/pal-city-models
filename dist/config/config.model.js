export default class ConfigModel {
    constructor(data) {
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
