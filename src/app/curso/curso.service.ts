import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url: string = "http://localhost:8080/api/php";

  vetor!:Curso[];

  constructor(private http: HttpClient) {
  }
  //
  //`${this.url}/listar`
  obterCursos(): Observable<Curso[]> {
    return this.http.get(this.url+"/listar").pipe(
      map((res: any) => {
        this.vetor =  res.cursos;
        return this.vetor;
      })
    )
  }

  cadastrarCurso(c:Curso): Observable<Curso[]>{
    console.log(" esse é o C" + c);
    return this.http.post(this.url+'/cadastrar', {cursos:c}).pipe(
      map((res: any) => {
        console.log(" esse é o res" + res);
        this.vetor.push(res.cursos);
        return this.vetor
    }))
  }
}
