import MissingParamError from '../../errors/missingParamError';
import { default as HttpHelpers } from '../helpers/http.helpers';
import { HttpRequest, HttpResponse } from '../protocols/http';

export default class SignUpController {
	handle(httpRequest: HttpRequest): HttpResponse {
		if (!httpRequest.body.name) {
			return HttpHelpers.badRequest(new MissingParamError('name'));
		}
		if (!httpRequest.body.email) {
			return HttpHelpers.badRequest(new MissingParamError('email'));
		}
	}
}
