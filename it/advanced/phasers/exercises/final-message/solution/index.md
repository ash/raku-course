---
title: 'Solution: Messaggio finale'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Puoi trovare il codice sorgente nel file [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Output

```
processed 3 items
```

## Commenti

1. Il phaser `END` e scritto prima del ciclo, ma viene eseguito per ultimo — dopo che il codice principale e terminato. A quel punto `$count` e stato incrementato tre volte.

1. Poiche il phaser chiude sopra `$count`, legge il valore *finale* della variabile, non lo `0` che conteneva quando il phaser appariva nel codice sorgente. Questo e il motivo abituale per inserire un riepilogo in `END`.

{% include nav.html %}
