import { Component } from '@angular/core';
import { CardGatoComponent } from '../../components/card-gato/card-gato.component';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CentroAdocaoService } from '../../service/centro-adocao.service';

@Component({
  selector: 'app-home',
  imports: [CardGatoComponent, CdkDropList, CdkDrag],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ninhada_gatos:any[] = [];
  iniciar = false;

  constructor(private readonly centroAdocaoServ: CentroAdocaoService) {
    centroAdocaoServ.ninhada_gatos$.subscribe((gato) => {
      if(gato !== null && this.ninhada_gatos.length <= 1000){
        this.ninhada_gatos = [...this.ninhada_gatos, gato];
      }
    })
  }

  mover(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ninhada_gatos, event.previousIndex, event.currentIndex);
  }

  comecarSSE(){
    this.iniciar = true;
    this.centroAdocaoServ.comecarConexaoSSE()
  }
  finalizarSSE(){
    this.iniciar = false;
    this.centroAdocaoServ.fecharConexaoSSE()
  }
}
