---
title: 'Solutio: Si numerus intra limites est'
---

{% include menu.html %}

Programma utitur intervallo quod creatur ex numeris quos usor intrat. Deinde, probatio smartmatch examinat si tertius numerus intra fines intervalli est. Eventus probationis smartmatch est valor Booleanus, itaque statim imprimere possumus.

## Codex

Hic est solutio:

```raku
my $begin = prompt 'A (incluso): ';
my $end = prompt 'Ad (excluso): ';

my $n = prompt 'Quis est numerus? ';

say $n ~~ $begin ..^ $end;
```

🦋 Inveni programma in archivo [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/ranges/number-in-limits.raku).

## Effectus

Proba varios casus, inclusis cum numerus coincidet cum fine intervalli.

```console
$ raku exercises/ranges/number-in-limits.raku
A (incluso): 1
Ad (excluso): 2
Quis est numerus? 1.5
Verum

$ raku exercises/ranges/number-in-limits.raku
A (incluso): 100
Ad (excluso): 200
Quis est numerus? 100
Verum

$ raku exercises/ranges/number-in-limits.raku
A (incluso): -5
Ad (excluso): -2
Quis est numerus? -2
Falsum
```

## Commentarium

Nota quomodo dextrum terminus intervalli excluditur: `$begin ..^ $end`.

{% include nav.html %}