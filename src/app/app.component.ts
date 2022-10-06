import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }


  fatosDegatinhos:any;
  ngOnInit(){
    this.http.get('https://catfact.ninja/fact').subscribe(
      data=>{
        this.fatosDegatinhos = data;
      },
      error=>{

      }
    );
  }

  title = 'algular-start-point';
  public nome:string = 'People';

  public pessoa = {
    nome: "People",
    idade: "VELHO",
    cidade: "Sao Paulo",
  }

  getNomePessoa() {
    return 'Nome: ' + this.pessoa.nome;
  }


  public lista = [
    { titulo: 'Titulo1' },
    { titulo: 'Titulo2' },
    { titulo: 'Titulo3' }
  ]
}
