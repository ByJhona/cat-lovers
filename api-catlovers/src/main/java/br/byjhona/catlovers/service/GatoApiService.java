package br.byjhona.catlovers.service;

import br.byjhona.catlovers.domain.Gato;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;

@Service
public class GatoApiService {
    private final WebClient client;

    GatoApiService(@Value("${catlovers.url.api}") String apiUrl) {
        this.client = WebClient.builder().baseUrl(apiUrl).build();
    }

    public Flux<ServerSentEvent<Gato>> adotarMuitosGatinhos() {
        return Flux.interval(Duration.ofSeconds(2))
                .flatMap(id -> this.client.get().uri("/images/search").retrieve().bodyToMono(new ParameterizedTypeReference<List<Gato>>() {
                }))
                .map(gatos -> {
                    Gato gato = gatos.getFirst();
                    System.out.println(gato.getUrl());
                    return ServerSentEvent.<Gato>builder().id(gato.getId()).event("novo-gato").data(gato).build();
                });
    }
}
