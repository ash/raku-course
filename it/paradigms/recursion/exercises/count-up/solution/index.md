---
title: "Soluzione: Contare all'insù"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Trova il programma nel file [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Output

```
1
2
3
```

## Commenti

1. Il caso base `return if $n < 1` ferma comunque la ricorsione una volta che il conteggio scende sotto zero.

1. È l'ordine delle ultime due righe a far contare *all'insù*: ogni chiamata ricorre prima fino in fondo al caso base, e solo dopo stampa il proprio numero mentre le chiamate si srotolano. Così `1` viene stampato per primo e `$n` per ultimo.

{% include nav.html %}
