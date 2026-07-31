---
title: 'Soluzione: Moltiplicate una coppia'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Trova il programma nel file [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Output

```
20
```

## Commenti

1. I due numeri sono catturati come `<a>` e `<b>`, ciascuno convertito con `.Int`.

1. Il blocco in linea combina le sottocorrispondenze — moltiplicandole — e conserva il risultato sulla corrispondenza, che `made` restituisce poi.

{% include nav.html %}
