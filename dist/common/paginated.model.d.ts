import { PaginationMetaModel } from "./pagination-meta.model";
export default class PaginatedModel<T> {
    data: T[];
    pagination: PaginationMetaModel;
    constructor(data: any, totalRecords?: number, pageNumber?: number, pageSize?: number);
}
