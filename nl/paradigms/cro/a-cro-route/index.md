---
title: Een Cro-route
translations_gpt:
---

{% include menu.html %}

Een Cro-HTTP-service wordt beschreven door een verzameling _routes_: elke route zegt welke URL hij afhandelt en wat hij teruggeeft. Je bouwt ze binnen een `route`-blok met het sleutelwoord `get`:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Lees de route als "een `GET`-verzoek voor het pad `hello` geeft de tekst `Hello from Cro!` terug". De functie `content` stelt zowel het contenttype als de body in — geen handmatige statusregels of `\r\n` te bekennen. `Cro::HTTP::Server` bindt de routes aan een adres en poort, en `.start` begint met bedienen.

Eén subtiliteit: `.start` blokkeert **niet** — het start de service op achtergrondthreads en keert meteen terug, en als het programma daar eenvoudigweg eindigde, zou de server ermee verdwijnen. Het afsluitende `react`-blok is wat het programma in leven houdt, en het is een oude bekende: `whenever signal(SIGINT)` reageert op het onderbrekingssignaal (Ctrl-C op het toetsenbord) door de server te stoppen en `done` aan te roepen. De reactieve gereedschappen van eerder in dit deel zijn precies hoe een Cro-programma wacht, bedient en netjes afsluit.

> Dit voorbeeld heeft Cro geïnstalleerd nodig (`zef install cro`). Draai het, open `http://127.0.0.1:8080/hello`, en stop de server met Ctrl-C als je klaar bent.

> Maak je geen zorgen als de server tijdens het browsen af en toe `Cannot write to a closed socket` afdrukt. Dat is geen fout in je code: een client — meestal een browser — opende een verbinding en liet die vallen voordat hij het antwoord las, wat browsers geregeld doen bij speculatieve of geannuleerde verzoeken. Cro noteert de verdwenen client, en de server blijft bedienen.

Een route kan URL-segmenten als parameters aannemen, JSON teruggeven en veel meer, maar de vorm is altijd deze: verklaar wat elk pad doet, geef de routes aan een server, en start hem. Vergeleken met de kale socketserver van de vorige sectie neemt Cro alle protocolboekhouding weg en laat het je alleen het deel schrijven dat specifiek is voor jouw service.

Deze route zegt echter altijd hetzelfde. De volgende pagina laat een route een **parameter** uit de URL lezen, zodat één enkele route `/hello/Anna` en `/hello/Bob` verschillend kan begroeten.

{% include nav.html %}
