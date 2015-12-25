import { Component, View } from 'angular2/core';
import { SessionService } from '../services/session.service';

const ERROR_TOO_SHORT = "Session name should be longer than 6 characters";
const ALREADY_IN_SESSION = "Already in session";
const NO_SESSION = "No session";
const EMPTY_SESSION = "";

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
    name: NO_SESSION,
    error: ""
  };
  public sessionName: string;
  constructor(private sessionService: SessionService) {
  }

  isCorrectSession() : boolean {
    this.session.error = EMPTY_SESSION;
    if(this.sessionName == this.session.name) {
      this.session.error = ALREADY_IN_SESSION;
      return false;
    } else if(this.sessionName.length < 6) {
      this.session.error = ERROR_TOO_SHORT;
      return false;
    }
    return true;
  }

  createSession() {
    if(this.isCorrectSession()) {
      var sessionName = this.sessionName;
      this.sessionService.createSession(sessionName).subscribe(
        (data) => {
          if(data.error) {
            this.session.error = data.error;
          } else {
            this.session.name = data.name;
          }
        }
      );
    }
  }

  joinSession() {
    if(this.isCorrectSession()) {
      var sessionName = this.sessionName;
      this.sessionService.joinSession(sessionName).subscribe(
        (data) => {
          if(data.error) {
            this.session.error = data.error;
          } else {
            this.session.name = data.name;
          }
        }
      );
    }
  }
}
