import { Component } from '@angular/core';
import { CardGatoComponent } from "../../components/card-gato/card-gato.component";
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [CardGatoComponent,CdkDropList, CdkDrag],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  lista_links = ["https://cdn2.thecatapi.com/images/HW1MGAuGL.jpg", "https://cdn2.thecatapi.com/images/bd0.jpg"]
  
  mover(event: CdkDragDrop<string[]>){
    moveItemInArray(this.lista_links, event.previousIndex, event.currentIndex);
  }

}
