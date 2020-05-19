import {Injectable} from '@angular/core';
import {TurmaDTO} from './turmaDTO';
import {AlunoDTO} from '../aluno/alunoDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private snackBar: MatSnackBar,
              private  http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // getTurmas(): TurmaDTO[] {
  //   return (this.turmas);
  // }

  list(): Observable<TurmaDTO[]> {
    const url = 'http://localhost:9000/api/turma/all';
    return this.http.get <TurmaDTO[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  getTurmaByID(id: number): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/get/';
    // const params = new HttpParams().set("id" = id);
    return this.http.get <TurmaDTO>(url + id);
  }

  save(turma: TurmaDTO): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/add';
    // @ts-ignore
    return this.http.post<TurmaDTO>(url, turma)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  // update(turma: TurmaDTO): Observable<TurmaDTO> {
  //   const url = 'http://localhost:9000/api/turma/edit';
  //   // @ts-ignore
  //   return this.http.put<TurmaDTO>(url, turma)
  //     .pipe(
  //       catchError(this.handleError)
  //     ).subscribe((data) => {
  //      if (data.id) {
  //      }
  //     });
  // }

  update(turma: TurmaDTO): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/edit';
    // @ts-ignore
    return this.http.put<TurmaDTO>(url, turma)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  delete(turma: TurmaDTO): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/delete/';
    // @ts-ignore
    return this.http.delete<any>(url + turma.id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false, ): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
     panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

}
