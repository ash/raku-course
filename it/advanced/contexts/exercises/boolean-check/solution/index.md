---
title: 'Solution: Un controllo booleano'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my @empty;
say ?@empty;
```

🦋 Puoi trovare il codice sorgente nel file [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Output

```
False
```

## Commenti

1. Il prefisso `?` forza il contesto Booleano.

1. Un array vuoto e falso, che e esattamente cio su cui `if @array` si basa.

{% include nav.html %}
