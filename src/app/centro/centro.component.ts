import { Component } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent{

  obterClasseContainerCentro(){
    return ['container-centro'];
  }

  obterClasseImagem(){
    return ['imagem'];
  }

  obterClasseTitulo(){
    return ['titulo'];
  }
}
