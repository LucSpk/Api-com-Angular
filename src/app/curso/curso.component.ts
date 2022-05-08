import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  vetor!:Curso[];

  curso = new Curso();

  constructor(private cursoServico: CursoService) { }

  ngOnInit(): void {
    this.selecao();
  }

  // - Cadastro
  cadastro(curso: Curso) {
    this.cursoServico.cadastrarCurso(curso).subscribe(
      (res: Curso[]) => {

        // - Adiciona dados ao vetor
        this.vetor = res;

        // - Limpar atributos
        //this.curso.nomeCurso = "";
        //this.curso.valorCurso = 0;

        // - Atualizar a listagem de cursos
        this.selecao();

      }
    )
  }

  // - Seleção
  selecao() {
    //this.cursoServico.obterCursos();
    this.cursoServico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res
      }
    );
  }

  // - Alterar
  alterar(): void {
    alert("Alterar");
  }

  // - Remover
  remover(): void {
    alert("Remover");
  }

}
