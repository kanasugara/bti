import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	result: Array<any>;
	constructor(private _http: Http) { }

	getRecipes() {
		return this._http.get('/api/recipe/list')
			.map(result => {
				return this.result = result.json().data;
			}
		);
	}
}
