import {Component} from 'angular2/core'

interface Form {
    username: string,
    password: string
};

@Component({
    selector: 'my-app',
    templateUrl: '/views/login.html'
})
export class LoginComponent{
    public form: Form = {
        username: "",
        password: ""
    }
    submit() {
        console.log(this.form.username, this.form.password);
    }
}
