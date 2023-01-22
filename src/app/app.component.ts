import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Miprimer App ANGULAR';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    
    this.ArregloTarjetas=[
      {titulo:'Video 1', subtitulo: 'SubTitulo Video1'},
      {titulo:'Video 2', subtitulo: 'SubTitulo Video2'},
      {titulo:'Video 3', subtitulo: 'SubTitulo Video3'},
    ]
  }
}
