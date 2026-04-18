export default class PaginationModel<T> {
    pageNumber: number;
    pageSize: number;
    totalRecords: number;
    data: T[];

    constructor(data: T[], pagination: { pageNumber: number; pageSize: number; totalRecords: number }) {
        this.pageNumber = pagination.pageNumber;
        this.pageSize = pagination.pageSize;
        this.totalRecords = pagination.totalRecords;
        this.data = data;
    }
}