---
title: 'Soluzione: Lista separata da virgole'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Trova il programma nel file [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Output

```
Raku, is, fun
```

## Commenti

1. Qui il blocco **costruisce** un valore invece di sceglierne uno: `$a` è la stringa assemblata finora e `$b` è la parola successiva, e `"$a, $b"` le incolla con una virgola e uno spazio.

1. La prima chiamata unisce `'Raku'` e `'is'` in `Raku, is`; la seconda unisce quello con `'fun'` per dare `Raku, is, fun`. È il genere di unione consapevole del separatore che il metaoperatore `[~]` non sa esprimere da solo.

1. Nel codice vero ricorreresti al metodo incorporato `join`, che fa esattamente questo — `say @words.join(', ');` stampa lo stesso `Raku, is, fun`. Il senso dell'esercizio è esercitarsi a esprimere la stessa idea come blocco di `reduce`.

{% include nav.html %}
