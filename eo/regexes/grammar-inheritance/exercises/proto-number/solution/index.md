---
title: 'Solvo: Nombro per proto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Eligo

```
True
```

## Komentoj

1. La proto-ĵetono `number` havas du variantojn, `dec` kaj `hex`.

1. Por `0xff`, la varianto `dec` kongruas nur kun la komenca `0`, kio lasus `xff` restanta; la varianto `hex` kongruas kun la tutaĵo. Kongruigo laŭ plej longa ĵetono do elektas `hex`, kaj la ĉeno analiziĝas. La sama gramatiko ankoraŭ akceptas simplan dekumon kiel `42`.

{% include nav.html %}
