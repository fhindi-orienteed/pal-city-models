import EntityModel from "./entity.model.js";
export default class PlaceModel extends EntityModel {
    summary?: string;
    coverImage?: string;
    tags: string[];
    constructor(data: any);
    private populateAttributes;
}
