import { HttpResponse } from '../protocols/http';

class HttpHelpers {
	public badRequest(error: Error): HttpResponse {
		return {
			statusCode: 400,
			body: error,
		};
	}
}

export default new HttpHelpers();
