---
title: 'Risinājums: Summa ar pull-one'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Izvade

```
15
```

## Komentāri

1. `.iterator` dod uz vilkšanu balstītu skatu uz sarakstu, un katrs `pull-one` atgriež nākamo skaitli.

1. Vērtība tiek **saistīta** ar `:=`, nevis piešķirta, lai `$v =:= IterationEnd` beigas pamanītu pareizi — ar piešķīrumu `=` tiktu salīdzināts konteiners, nevis vērtība. Cikls saskaita `3`, `7` un `5`, tad sastop `IterationEnd` un apstājas, atstājot `15`.

{% include nav.html %}
