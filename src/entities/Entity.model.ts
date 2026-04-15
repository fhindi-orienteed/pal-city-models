export class EntityModel {
    id: number;
    identifier: string;
    status: string;
    type: string;

    constructor(data: any) {
        this.id = data.id;
        this.identifier = data.identifier;
        this.status = data.status;
        this.type = data.type;
    }
}