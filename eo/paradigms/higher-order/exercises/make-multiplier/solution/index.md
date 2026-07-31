---
title: 'Solvo: Kreu multiplikilon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Vi povas trovi la fontkodon en la dosiero [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Eligo

```
14
21
```

## Komentoj

1. `multiplier(2)` redonas subprogramon, kiu memoras, ke `$n` estas `2`; `multiplier(3)` redonas apartan subprogramon, kiu memoras `3`.

1. Ĉiu redonita subprogramo konservas sian propran `$n`, do `double(7)` donas `14` kaj `triple(7)` donas `21` — du sendependaj funkcioj konstruitaj el la sama fabriko.

{% include nav.html %}
