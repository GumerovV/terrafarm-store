export const errorCatch = (error) =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message
			: error.response.data.message
		: error.message