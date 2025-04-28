import { Component, Input } from '@angular/core';
import { Gato } from '../../types/gato';

@Component({
  selector: 'app-card-gato',
  imports: [],
  templateUrl: './card-gato.component.html',
  styleUrl: './card-gato.component.scss'
})
export class CardGatoComponent {
  @Input() gato!:Gato;
}
