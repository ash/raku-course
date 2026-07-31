---
title: 'Solution: Ripetere ogni numero'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Puoi trovare il codice sorgente nel file [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Output

```
[1 2 2 3 3 3 4 4 4 4]
```

## Commenti

1. Nulla obbliga a un singolo `take` per iterazione. Qui il `take $n for 1..$n` interno esegue `take` un numero diverso di volte ad ogni passaggio, ed e esattamente la flessibilita che rende `gather`/`take` piu potente di un semplice `map`.

1. Il ciclo esterno usa una variabile con nome `-> $n` di proposito. Se scrivessimo il ciclo interno con `$_`, il `for` interno riassegnerebbe `$_` al proprio contatore, e prenderemmo il contatore invece del numero corrente.

1. `gather` raccoglie semplicemente ogni valore che e stato preso, in ordine, quindi `@result` finisce per contenere `1`, poi due `2`, poi tre `3`, poi quattro `4`.

{% include nav.html %}
