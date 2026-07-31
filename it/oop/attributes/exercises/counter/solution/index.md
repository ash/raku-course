---
title: 'Soluzione: Un contatore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Trova il programma nel file [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Output

```
0
5
```

## Commenti

1. L'attributo è dichiarato `is rw` perché il suo accessore restituisca un contenitore scrivibile, e `= 0` gli dà un valore di partenza. Il primo `say` conferma che un contatore appena creato parte davvero da quel valore predefinito, `0`.

1. Poiché l'accessore è scrivibile, incrementarlo con `++` funziona come ci si aspetta.

{% include nav.html %}
