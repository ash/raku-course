---
title: 'Soluzione: Contate i valori emessi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Trova il programma nel file [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Output

```
5
```

## Commenti

1. La presa gira una volta per valore emesso, quali che siano i valori.

1. Incrementare `$count` ogni volta dà il numero totale di valori, `5`.

{% include nav.html %}
