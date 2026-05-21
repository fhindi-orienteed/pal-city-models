export class EntityAttributeModel {
    id: number;
    entityId: number;
    key: string;
    value: string;
    type: string;
    langId: number;

    constructor(data: any) {
        this.id = data.id;
        this.entityId = data.entityId;
        this.key = data.key;
        this.value = data.value;
        this.type = data.type;
        this.langId = data.langId;
    }
}