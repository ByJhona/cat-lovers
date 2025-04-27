package br.byjhona.catlovers.controller;

import br.byjhona.catlovers.domain.Gato;
import br.byjhona.catlovers.service.GatoApiService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/gatinhos")
public class GatinhosController {
    @Autowired
    private GatoApiService gatoApiServ;

    @GetMapping("/adotar")
    public Flux<ServerSentEvent<Gato>> adotarGatinhos(){
        Flux<ServerSentEvent<Gato>> gato = this.gatoApiServ.adotarMuitosGatinhos();
        return this.gatoApiServ.adotarMuitosGatinhos();
    }

}
