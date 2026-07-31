---
title: 'Solution: Begin per primo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Puoi trovare il codice sorgente nel file [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Output

```
5
```

## Commenti

1. `BEGIN { 2 + 3 }` viene eseguito durante la compilazione e produce `5`. Usato come espressione, un blocco `BEGIN` restituisce il suo valore, che viene assegnato a `$compiled`.

1. Il calcolo avviene una sola volta, a tempo di compilazione; a tempo di esecuzione `$compiled` contiene semplicemente la costante `5`. Questo e il modo in cui `BEGIN` viene usato per precalcolare valori, non solo per stampare in anticipo.

{% include nav.html %}
