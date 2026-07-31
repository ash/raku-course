---
title: 'Soluzione: Contate gli attributi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Trova il programma nel file [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Output

```
2
```

## Commenti

1. `.^attributes` restituisce l'elenco degli attributi della classe.

1. `.elems` li conta. La classe `Point` dichiara due attributi, quindi la risposta è `2`.

{% include nav.html %}
