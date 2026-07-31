---
title: 'Soluzione: Descrivere in base al tipo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Trova il programma nel file [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Output

```
integer 42
string hi
list of 3
```

## Commenti

1. Ogni `multi` dà una versione di `describe` con un tipo di parametro diverso. Raku
sceglie il candidato corrispondente in base al tipo dell'argomento.

1. La firma `@x` corrisponde a una lista, quindi l'array viene distribuito al terzo
candidato, che ne riferisce la lunghezza.

{% include nav.html %}
