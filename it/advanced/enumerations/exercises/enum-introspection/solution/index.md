---
title: 'Solution: Contare e sommare'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Puoi trovare il codice sorgente nel file [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Output

```
4
41
```

## Commenti

1. Le costanti sono definite come coppie, quindi ognuna riceve il valore scelto da noi invece della numerazione automatica a partire da zero.

1. `.enums` restituisce una mappa da ogni nome di costante al suo valore. `.elems` conta le voci: ci sono quattro monete.

1. `.values` estrae solo i numeri dietro i nomi, e `.sum` li somma: `1 + 5 + 10 + 25` fa `41`.

{% include nav.html %}
