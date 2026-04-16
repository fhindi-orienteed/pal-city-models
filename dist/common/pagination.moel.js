export default class PaginationModel {
    constructor(data, pagination) {
        this.pageNumber = pagination.pageNumber;
        this.pageSize = pagination.pageSize;
        this.totalRecords = pagination.totalRecords;
        this.data = data;
    }
}
