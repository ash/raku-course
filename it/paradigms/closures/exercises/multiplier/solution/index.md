---
title: 'Soluzione: Un moltiplicatore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Trova il programma nel file [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Output

```
12
```

## Commenti

1. Il blocco con la freccia restituito si chiude su `$factor`, ricordando che è `3`.

1. Chiamarlo con `4` dà `12`.

{% include nav.html %}
