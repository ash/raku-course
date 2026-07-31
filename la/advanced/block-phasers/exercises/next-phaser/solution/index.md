---
title: 'Solutio: Post quemque gradum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Inveni codicem fontem in archivo [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Exitus

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Commentarii

1. Phaser `NEXT` primus scriptus est, sed in *fine* cuiusque iterationis currit — postquam corpus numerum currentem ad `$sum` addidit.

1. Ergo post primum transitum `$sum` est `1`, post secundum est `3`, et post tertium est `6`. `NEXT` est pars ansae respondens currendi aliquid inter iterationes, distincta a `FIRST` (semel in principio) et `LAST` (semel in fine).

{% include nav.html %}
