import { PaginationMetaModel } from "./pagination-meta.model.js";
export class PaginatedModel {
    constructor(data, totalRecords, pageNumber = 1, pageSize = 10) {
        this.data = data;
        this.pagination = new PaginationMetaModel(totalRecords !== null && totalRecords !== void 0 ? totalRecords : data.length, pageNumber, pageSize);
    }
}
