---
title: 'Soluzione: Incanalate i numeri grandi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Trova il programma nel file [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Output

```
[6 7 8 9 10]
```

## Commenti

1. Il flusso manda `1..10` dentro `grep`, che conserva i numeri maggiori di `5`.

1. Il risultato scorre in `@big`, il bersaglio che chiude il flusso.

{% include nav.html %}
