import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gato } from '../types/gato';

@Injectable({
  providedIn: 'root',
})
export class CentroAdocaoService {
  cesariana: EventSource | null = null;
  ninhada_gatos = new BehaviorSubject<Gato | null>(null);
  ninhada_gatos$ = this.ninhada_gatos.asObservable();

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  comecarConexaoSSE() {
    if (isPlatformBrowser(this.platformId)) {
      this.cesariana = new EventSource('http://localhost:8080/gatinhos/adotar');

      this.cesariana.addEventListener('novo-gato', (event: MessageEvent) => {
        const gato = JSON.parse(event.data);
        this.ninhada_gatos.next(gato);
      });

      this.cesariana.addEventListener('error', () => console.error("Erro ao iniciar conexão com servidor usando SSE."))
    }
  }

  fecharConexaoSSE() {
    this.cesariana?.close();
  }

  ngOnDestroy(){
    this.cesariana?.close();
  }
}
