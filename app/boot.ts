import { bootstrap } from 'angular2/platform/browser'
import { Component, provide } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

import { SessionComponent } from './components/session.component';
import { LoginComponent } from './components/login.component';
import { SessionService } from './services/session.service';

@Component({
  selector: 'basic-routing',
  template: `<a [routerLink]="['/Home']">Home</a>
             <a [routerLink]="['/Session']">Session</a>
             <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: '/', component: LoginComponent, as: 'Home'},
  {path: '/session', component: SessionComponent, as: 'Session' }])
class RootComponent {}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
//bootstrap(SessionComponent, [HTTP_PROVIDERS, provide(SessionService, {useClass: Http})]);
