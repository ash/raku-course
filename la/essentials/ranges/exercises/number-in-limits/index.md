---
title: 'Exercitium: Si numerus intra limites est'
---

{% include menu.html %}

## Problema

Scribe programmatum quod rogat ut tria numeros intrent: `$begin`, `$end`, et `$n` et imprimit `Verum` aut `Falsum` secundum utrum `$n` sit in intervallo `[$begin, $end)` (incluso `$begin` sed excluso `$end`).

Assume, quaeso, numeros intratos condicionem satisfacere: `$begin < $end + 1`, sed codicem ad id comprobandum non adde.

## Exemplum

Possibilis output programmatis pro utroque casu infra monstratur:

```console
$ raku number-in-limits.raku
Ab (incluso): 10
Ad (excluso): 20
Quis est numerus? 15
Verum

$ raku number-in-limits.raku
Ab (incluso): 10
Ad (excluso): 20
Quis est numerus? 30
Falsum
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}