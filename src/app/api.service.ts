import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
baseUrl:string = "http://localhost/angular_admin/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username, password) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(name,email,mobile,password) {
return this.httpClient.post<any>(this.baseUrl + '/signup.php', { name,email,mobile,password })
.pipe(map(Users => {
return Users;
}));
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}