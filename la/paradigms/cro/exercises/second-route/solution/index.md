---
title: 'Solutio: Via secunda'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Exitus

```
Goodbye!
```

## Commentarii

1. Blocus `route` tot vias quot vis tenere potest; unumquodque `get` unam semitam tractat.

1. Cro semitam petitionis viae rectae congruit, itaque `/hello` et `/bye` propria responsa reddunt.

1. Ut in pagina theoriae, `.start` statim redit, itaque blocus `react` claudens programma vivum servat donec Ctrl-C premas — `whenever signal(SIGINT)` tunc servitorem sistit et reactionem finit.

{% include nav.html %}
