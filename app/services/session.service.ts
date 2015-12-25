import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class SessionService {
  public baseUrl : string;
  constructor(public http : Http) {
    this.baseUrl = 'http://localhost:3001/session';
  }

  getCurrent() : any {
    return this.http.get(this.baseUrl + '/currentSession')
      .map(res => res.json());
  }

  createSession(session : string) : any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/create', JSON.stringify({ name: session }), { headers: headers })
      .map(res => res.json());
  }

  joinSession(session: string) : any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/join', JSON.stringify({ name: session }), { headers: headers })
      .map(res => res.json());
  }
}
