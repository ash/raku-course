---
title: 'Solvo: Kongrui laŭ tipo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Eligo

```
rational
```

## Komentoj

1. Kiam la valoro por kongrui estas tipo, la saĝa kongruado demandas, ĉu la temo *estas de tiu tipo*. `3.14` ne estas `Int`, do la unua `when` estas preterlasata.

1. Dekuma literalo kiel `3.14` estas `Rat` (racionala nombro) en Raku, do la dua `when` kongruas kaj la programo presas `rational`.

{% include nav.html %}
