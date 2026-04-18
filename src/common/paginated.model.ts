import { PaginationMetaModel } from "./pagination-meta.model";

export default class PaginatedModel<T> {
    data: T[];
    pagination: PaginationMetaModel;

    constructor(data: any, totalRecords?: number, pageNumber: number = 1, pageSize: number = 10) {
        this.data = data;
        this.pagination = new PaginationMetaModel(totalRecords ?? data.length, pageNumber, pageSize);
    }
}
