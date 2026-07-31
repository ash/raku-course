---
title: 'Solutio: Colligere usque ad plenum'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Inveni codicem fontem in archivo [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Exitus

```
[1 2 3 4]
```

## Commentarii

1. Ansae series centum numerorum datur, multo plus quam utetur. Bene est quia ansa se ipsam sistit: simulac `$sum` superat `10`, `last` interrumpit et reliqui numeri numquam visitantur.

1. Ordo intra copiam refert. Primum ad `$sum` addimus et limitem ante capturam verificamus, ergo numerus qui totalem supra `10` pellat (hic, `5`) non colligitur. Summa currens exacte `10` post `4` attingit, ergo index collectus est `1, 2, 3, 4`.

1. Hic exitus maturus cum `for` est quod `gather`/`take` facere potest et `grep` non potest: `grep` semper totum indicem perscrutatur, dum hic eligimus quando sistere.

{% include nav.html %}
