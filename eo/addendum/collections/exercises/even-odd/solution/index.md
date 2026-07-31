---
title: 'Solvo: Dividu en parajn kaj neparajn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Vi povas trovi la fontkodon en la dosiero [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Eligo

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Komentoj

1. `* %% 2` estas vera por nombroj divideblaj per du; `* % 2` estas vera, kiam la
resto estas nenula, tio estas nepara. Ĉiu `grep` konservas unu grupon.

1. Interpoli `@even[]` per la malplen-kramp-a zen-tranĉaĵo presas la elementojn
apartigitajn per spacoj ene de la duoble citita ĉeno.

{% include nav.html %}
