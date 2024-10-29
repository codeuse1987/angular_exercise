export interface ResponseModel<T> {
    page_number?: number,
    kind: string,
    total_results?: number,
    items: T[]
}