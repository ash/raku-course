---
title: 'Solvo: Post ĉiu paŝo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Eligo

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Komentoj

1. La fazilo `NEXT` estas skribita unue, sed ĝi ruliĝas ĉe la *fino* de ĉiu iteracio — post kiam la korpo aldonis la aktualan numeron al `$sum`.

1. Do post la unua paŝo `$sum` estas `1`, post la dua ĝi estas `3`, kaj post la tria ĝi estas `6`. `NEXT` estas la bukla ekvivalento de ruli ion inter iteracioj, aparte de `FIRST` (unufoje ĉe la komenco) kaj `LAST` (unufoje ĉe la fino).

{% include nav.html %}
