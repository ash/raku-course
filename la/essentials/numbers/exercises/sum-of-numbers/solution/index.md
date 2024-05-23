---
title: Solutio ad ‘Summa numerorum’
---

{% include menu.html %}

Hic est solutio problematis.

## Codex

```raku
my $a = prompt 'Intra numerum A: ';
my $b = prompt 'Intra numerum B: ';
my $c = prompt 'Intra numerum C: ';

my $sum = $a + $b + $c;

say "Summa numerorum est $sum.";
```

🦋 Codicem completum invenire potes in archivo [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Effectus

Programma aliquoties exsequi et confirmare illud operari cum numeris diversorum generum.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Intra numerum A: 1.2
Intra numerum B: -3.4
Intra numerum C: 45
Summa numerorum est 42.8.
```

## Commentarii

Nota quod directe utimur valore a functione `prompt` reddito. Hoc potest problemata creare si usor intrat stringam quae valorem non repraesentat. Programma melius facere possumus in futuro postquam de exceptionibus discimus.

{% include nav.html %}