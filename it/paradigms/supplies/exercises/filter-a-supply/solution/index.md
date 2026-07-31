---
title: 'Soluzione: Filtrate un supply'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Trova il programma nel file [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Output

```
[2 4 6]
```

## Commenti

1. `grep(* %% 2)` produce un nuovo supply che lascia passare solo i valori pari, proprio come `grep` filtra un elenco.

1. La presa raccoglie quei valori in `@out`, dando `[2 4 6]`.

{% include nav.html %}
