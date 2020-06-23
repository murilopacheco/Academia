import {Injectable} from '@angular/core';
import {AlunoDTO} from './alunoDTO';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {TurmaDTO} from '../turma/turmaDTO';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

 aluno: AlunoDTO;

  constructor( private snackBar: MatSnackBar,
               private http: HttpClient) {}

  // getAlunos(): AlunoDTO[] {
  //   // return this.alunos;
  //   const url = '/api/aluno/all';
  //   // return this.http.get<AlunoDTO[]>(url)
  //   //   .subscribe(resultado);
  //   this.subscribe((alunos: AlunoDTO[]) => {
  //     this.cars = cars;
  //   }
  // }

  // // Obtem todos os carros
  // getAlunos(): Observable<AlunoDTO[]> {
  //   const url = 'http://localhost:9000/aluno/all';
  //   return this.http.get<AlunoDTO[]>(url)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError));
  // }

  list(): Observable<AlunoDTO[]> {
    const url = 'http://localhost:9000/api/aluno/all';
    return this.http.get <AlunoDTO[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAlunoByID(id: number): Observable<AlunoDTO> {
    const url = 'http://localhost:9000/api/aluno/get/';
    // const params = new HttpParams().set("id" = id);
    return this.http.get<AlunoDTO>(url + id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  saveAluno(aluno: AlunoDTO): Observable<AlunoDTO> {
    const url = 'http://localhost:9000/api/aluno/add';
    // @ts-ignore
    return this.http.post<AlunoDTO>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateAluno(aluno: AlunoDTO): Observable<AlunoDTO> {
    const url = 'http://localhost:9000/api/aluno/edit';
    // @ts-ignore
    return this.http.put<AlunoDTO>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(aluno: AlunoDTO): Observable<AlunoDTO> {
    const url = 'http://localhost:9000/api/aluno/delete/';
    // @ts-ignore
    return this.http.delete<any>(url + aluno.id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  // Manipulação de erros
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



