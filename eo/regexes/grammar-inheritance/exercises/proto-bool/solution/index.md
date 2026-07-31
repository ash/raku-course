---
title: 'Solvo: Buleo per proto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Eligo

```
True
True
False
```

## Komentoj

1. La proto-ĵetono `bool` havas du nomitajn variantojn, `true` kaj `false`.

1. Ĉiu analizo elektas la kongruan varianton, do kaj `'true'` kaj `'false'` sukcesas. Proto-ĵetono estas la bonorda maniero de la gramatiko diri «unu el ĉi tiuj nomitaj alternativoj».

1. `'unknown'` kongruas kun neniu varianto, do estas nenio, al kio la proto-ĵetono povus disdoni, kaj la analizo malsukcesas — `False`. La proto akceptas ekzakte la alternativojn, kiujn vi listigas, kaj nenion alian.

{% include nav.html %}
