---
title: 'Oplossing: Een tweede route'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
    get -> 'bye' {
        content 'text/plain', 'Goodbye!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Uitvoer

```
Goodbye!
```

## Opmerkingen

1. Een `route`-blok mag zoveel routes bevatten als je wilt; elke `get` handelt één pad af.

1. Cro koppelt het verzoekpad aan de juiste route, dus geven `/hello` en `/bye` hun eigen antwoorden.

1. Net als op de theoriepagina keert `.start` meteen terug, dus houdt het afsluitende `react`-blok het programma in leven tot je Ctrl-C indrukt — `whenever signal(SIGINT)` stopt dan de server en beëindigt de reactie.

{% include nav.html %}
