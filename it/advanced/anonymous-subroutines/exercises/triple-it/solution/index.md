---
title: 'Solution: Triplicare'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Puoi trovare il codice sorgente nel file [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Output

```
21
```

## Commenti

1. Il blocco a freccia usa `$factor`, una variabile dallo scope circostante, anche se ha solo un parametro `$x`. Catturare tali variabili e cio che lo rende una closure.

1. Con `$factor` uguale a `3`, chiamare `$scale(7)` da `21`. Cambiando `$factor`, lo stesso blocco scalerebbe con il nuovo valore:

```raku
$factor = 5;
say $scale(7); # 35
```

Poiche la closure cattura la *variabile* piuttosto che il suo valore al momento in cui e stata scritta, la chiamata successiva vede il `$factor` aggiornato e restituisce `35`.

{% include nav.html %}
