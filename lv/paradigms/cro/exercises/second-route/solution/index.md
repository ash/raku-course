---
title: 'Risinājums: Otrs maršruts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Izvade

```
Goodbye!
```

## Komentāri

1. `route` bloks var saturēt tik maršrutu, cik vien vēlaties; katrs `get` apstrādā vienu ceļu.

1. Cro pieprasījuma ceļu saskaņo ar pareizo maršrutu, tāpēc `/hello` un `/bye` atgriež katrs savu atbildi.

1. Tāpat kā teorijas lappusē, `.start` atgriežas uzreiz, tāpēc noslēdzošais `react` bloks programmu tur pie dzīvības, līdz nospiežat Ctrl-C — `whenever signal(SIGINT)` tad aptur serveri un izbeidz reakciju.

{% include nav.html %}
