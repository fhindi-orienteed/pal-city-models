import { PaginationMetaModel } from "./pagination-meta.model.js";
export declare class PaginatedModel<T> {
    data: T[];
    pagination: PaginationMetaModel;
    constructor(data: any, totalRecords?: number, pageNumber?: number, pageSize?: number);
}
