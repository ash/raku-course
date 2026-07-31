---
title: 'Solvo: Sumi per pull-one'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Eligo

```
15
```

## Komentoj

1. `.iterator` donas la tir-bazitan vidon de la listo, kaj ĉiu `pull-one` redonas la sekvan nombron.

1. La valoro estas **ligita** per `:=`, ne atribuita, por ke `$v =:= IterationEnd` povu ĝuste rimarki la finon — atribua `=` komparus la ujon anstataŭ la valoron. La buklo aldonas `3`, `7` kaj `5`, poste renkontas `IterationEnd` kaj haltas, lasante `15`.

{% include nav.html %}
