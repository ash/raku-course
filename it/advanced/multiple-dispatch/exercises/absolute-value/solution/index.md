---
title: 'Solution: Valore assoluto'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione per questo esercizio.

## Codice

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Puoi trovare il codice sorgente nel file [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Output

```
7
4
```

## Commenti

1. Il primo candidato corrisponde solo ai numeri negativi e restituisce il valore negato, che risulta positivo.

1. Ogni altro numero — zero e i positivi — va al secondo candidato, che restituisce il valore invariato.

{% include nav.html %}
