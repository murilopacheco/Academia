import { Injectable } from '@angular/core';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlunoDTO} from '../aluno/alunoDTO';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  // login(user: User) {
  //   const url = 'http://localhost:9000/api/login/auth/' + user.userName + '/' + user.password;
  //   // const params = new HttpParams().set("id" = id);
  //   const valido: boolean = false;
  //   console.log(url);
  //   console.log(user);
  //   this.http.get<boolean>(url) .pipe(
  //     map((obj) => obj),
  //     catchError((e) => this.errorHandler(e))
  //   );
  //   console.log(valido);
  //   if (valido) {
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/']);
  //   }
  // }

  // login(user: User) {
  //   const url = 'http://localhost:9000/api/login/user';
  //   console.log(user);
  //   this.http.post<Observable<boolean>>(url, {
  //     userName: user.userName,
  //     password: user.password
  //   }).subscribe(isValid => {
  //     if (isValid) {
  //       sessionStorage.setItem(
  //         'token',
  //         btoa( user.userName + ':' + user.password)
  //       );
  //       this.router.navigate(['/']);
  //     } else {
  //       alert('Authentication failed.');
  //     }
  //   });
  // }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false, ): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
