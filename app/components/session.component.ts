import { Component, View } from 'angular2/core';
import { SessionService } from '../services/session.service';

interface Session {
  name: string,
  error: string
};

@Component({
  selector: 'my-app',
  providers: [SessionService]
})
@View({
    templateUrl: '/views/session.html'
})
export class SessionComponent {
  public session : Session = {
    name: "No session",
    error: ""
  };
  public sessionName: string;
  constructor(private sessionService: SessionService) {
  }

  createSession() {
    var name = this.sessionName;
    this.sessionService.createSession(name).subscribe(
      (data) => {
        this.session.name = data.name;
        this.session.error = "";
      }
    );
  }

  joinSession() {
    var name = this.sessionName;
    this.sessionService.joinSession(name).subscribe(
      (data) => {
        if(data.error) {
          this.session.error = data.error;
        } else {
          this.session.error = "";
          this.session.name = data.name;
        }
      }
    );
  }
}
