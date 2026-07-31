---
title: 'Soluzione: Una seconda rotta'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Output

```
Goodbye!
```

## Commenti

1. Un blocco `route` può contenere quante rotte vuoi; ogni `get` gestisce un percorso.

1. Cro associa il percorso della richiesta alla rotta giusta, quindi `/hello` e `/bye` restituiscono ciascuno la propria risposta.

1. Come nella pagina di teoria, `.start` ritorna subito, quindi il blocco `react` finale tiene vivo il programma finché non premi Ctrl-C — `whenever signal(SIGINT)` ferma allora il server e chiude la reazione.

{% include nav.html %}
