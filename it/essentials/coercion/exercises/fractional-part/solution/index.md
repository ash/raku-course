---
title: 'Soluzione: Parte frazionaria'
---

{% include menu.html %}

Per ottenere la parte frazionaria di un numero, puoi sottrarre la parte intera, che puoi ottenere convertendo il numero a un `Int`.

## Codice

La soluzione possibile è mostrata di seguito:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Trova il programma nel file [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/fractional-part.raku).

## Output

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Commento

Prova lo stesso programma anche con numeri negativi, per esempio:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

In questo caso, il risultato dovrebbe essere anch'esso corretto:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}