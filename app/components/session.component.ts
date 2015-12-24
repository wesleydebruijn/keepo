import { Component, View } from 'angular2/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'my-app',
  providers: [SessionService]
})
@View({
    templateUrl: '/views/session.html'
})
export class SessionComponent {
  constructor(sessionService: SessionService) {
    sessionService.getCurrentSession();
  }
}
