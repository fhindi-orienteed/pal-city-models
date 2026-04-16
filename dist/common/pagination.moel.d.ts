export default class PaginationModel<T> {
    pageNumber: number;
    pageSize: number;
    totalRecords: number;
    data: T[];
    constructor(data: T[], pagination: {
        pageNumber: number;
        pageSize: number;
        totalRecords: number;
    });
}
