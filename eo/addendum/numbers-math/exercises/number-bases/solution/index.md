---
title: 'Solvo: Unu nombro, tri bazoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Vi povas trovi la fontkodon en la dosiero [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Eligo

```
11111111
377
FF
```

## Komentoj

1. La metodo `.base` prezentas entjeron en ajna bazo de 2 ĝis 36, redonante
ĉenon. `255` estas `11111111` duume kaj `FF` deksesume — la plej granda valoro,
kiu eniras unu bajton.

{% include nav.html %}
