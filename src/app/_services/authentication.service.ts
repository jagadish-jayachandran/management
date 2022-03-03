import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { Role } from '../_models/role';
import { tap, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<User>;
  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(localStorage.getItem('user'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(userName: string, password: string) {
    let user: User = {
      id: 1,
      firstName: 'jaga',
      lastName: 'admin',
      username: 'admin',
      role: 'Admin',
      token: '1',
    };
    let user1: User = {
      id: 2,
      firstName: 'jaga',
      lastName: 'admin',
      username: 'admin',
      role: 'User',
      token: '2',
    };
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((val) => {
        this.isUserLoggedIn = userName == 'admin' && password == 'admin';
        if (this.isUserLoggedIn) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        } else {
          localStorage.setItem('user', JSON.stringify(user1));
          this.userSubject.next(user1);
        }
        localStorage.setItem(
          'isUserLoggedIn',
          this.isUserLoggedIn ? 'true' : 'false'
        );
        console.log('Is User Authentication is successful: ' + val);
      })
    );
    // let user =    localStorage.setItem('user', JSON.stringify({ id:1,
    //             firstName: 'jaga',
    //             lastName: 'string',
    //             username: 'string',
    //             role: Role,
    //             token: '1',}));
    //             this.userSubject.next(user);

    // return user;
    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //     .pipe(map(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //         this.userSubject.next(user);
    //         return user;
    //     }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
