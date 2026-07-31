---
title: 'Soluzione: Due collegamenti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Trova il programma nel file [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Output

```
[2 4 6]
[3 6 9]
```

## Commenti

1. `Supply.from-list` è su richiesta, quindi ripropone la propria sequenza completa per **ogni** presa, in modo indipendente.

1. Questo permette alle due prese di far girare pipeline diverse sulla stessa sorgente: una raddoppia, una triplica. Ciascuna vede tutto `1, 2, 3`, quindi i risultati sono `[2 4 6]` e `[3 6 9]`.

{% include nav.html %}
