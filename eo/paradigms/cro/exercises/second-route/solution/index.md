---
title: 'Solvo: Dua vojo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Eligo

```
Goodbye!
```

## Komentoj

1. Bloko `route` povas enhavi tiom da vojoj, kiom vi volas; ĉiu `get` traktas unu vojon.

1. Cro kongruigas la petan vojon kun la ĝusta vojo, do `/hello` kaj `/bye` redonas siajn proprajn respondojn.

1. Kiel sur la teoria paĝo, `.start` revenas tuj, do la ferma bloko `react` tenas la programon viva, ĝis vi premas Ctrl-C — `whenever signal(SIGINT)` tiam haltigas la servilon kaj finas la reagon.

{% include nav.html %}
