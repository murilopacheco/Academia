import {Injectable} from '@angular/core';
import {TurmaDTO} from './turmaDTO';
import {AlunoDTO} from '../aluno/alunoDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {getIifeBody} from '@angular/compiler-cli/ngcc/src/host/esm5_host';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private  http: HttpClient) {
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
    return this.http.get <TurmaDTO[]>(url);
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
        catchError(this.handleError)
      ).subscribe((data) => {
        console.log(data);
      });
  }

  update(turma: TurmaDTO): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/edit';
    // @ts-ignore
    return this.http.put<TurmaDTO>(url, turma)
      .pipe(
        catchError(this.handleError)
      ).subscribe((data) => {
        console.log(data);
      });
  }

  delete(turma: TurmaDTO): Observable<TurmaDTO> {
    const url = 'http://localhost:9000/api/turma/delete/';
    console.log('delete', turma);
    // @ts-ignore
    return this.http.delete<any>(url + turma.id).pipe(
      catchError(this.handleError)
    ).subscribe((data) => {
      console.log(data);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
