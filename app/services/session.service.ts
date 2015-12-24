import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class SessionService {
  public baseUrl : string;
  public http : Http;
  public data : any;
  constructor(http:Http) {
    this.baseUrl = 'http://localhost:3001/session';
    this.http = http;
  }

  getCurrentSession() : any {
    this.http.get(this.baseUrl).map(res => res.text()).subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log(this.data)
    );
  }
}
