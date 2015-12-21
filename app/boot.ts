import {bootstrap} from 'angular2/platform/browser'
import {SessionComponent} from './components/session.component';
import {LoginComponent} from './components/login.component';
import {Component, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
               <a [routerLink]="['/Session']">Session</a>
               <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]})
@RouteConfig([
    {path: '/', component: LoginComponent, as: 'Home'},
    {path: '/session', component: SessionComponent, as: 'Session' }])
class RootComponent {}

bootstrap(RootComponent, [ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})]);
