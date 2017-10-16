import { Component } from "@angular/core";
import { UserCredentials } from "../../vm";

@Component({
    selector: 'login',
    templateUrl: './components/login/login.component.html'
})
export class LoginComponent {
    credentials: UserCredentials;

    constructor() {
        this.credentials = new UserCredentials();
    }

    authenticate() {
        console.log('Authenticate User: ', this.credentials.email); 
    }
}