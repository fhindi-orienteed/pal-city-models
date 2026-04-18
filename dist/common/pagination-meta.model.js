export class PaginationMetaModel {
    constructor(totalRecords = 0, pageNumber = 1, pageSize = 10) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalRecords = totalRecords;
    }
}
