
export class PaginationMetaModel {
    pageNumber: number;
    pageSize: number;
    totalRecords: number;

    constructor(totalRecords: number = 0, pageNumber: number = 1, pageSize: number = 10) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalRecords = totalRecords;
    }
}
