export class EntityAttributeModel {
    constructor(data) {
        this.id = data.id;
        this.entityId = data.entityId;
        this.key = data.key;
        this.value = data.value;
        this.type = data.type;
        this.langId = data.langId;
    }
}
