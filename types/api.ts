interface IApiBaseResponse<T> {
	count: number,
	next: string | null,
	previous: string | null,
	results: T
}

export type {
	IApiBaseResponse
}