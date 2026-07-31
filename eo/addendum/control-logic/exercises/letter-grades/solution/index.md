---
title: 'Solvo: Literaj notoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Eligo

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Komentoj

1. `do given` transformas la tutan `given`/`when` en esprimon, kies valoro estas la
kongrua bloko — ĉi tie nota litero — kiu estas konservata en `$grade`.

1. Ĉiu `when * >= N` estas Whatever-komparo kontraŭ la temo. La unua, kiu
sukcesas, venkas, do la limoj bezonas nur po unu malsupran baron.

{% include nav.html %}
