---
title: 'Solvo: Litero aŭ cifero'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Eligo

```
｢x｣
```

## Komentoj

1. Klaso povas teni plurajn intervalojn, unu post la alia. `<[a..z 0..9]>` kongruas kun unu signo, kiu estas minusklo **aŭ** cifero. La spaco inter la du intervaloj estas tie nur por legebleco — `<[a..z0..9]>` signifas ekzakte la samon, ĉar spacoj ene de `<[…]>` estas ignorataj, same kiel ili estas aliloke en regulesprimo.

1. Trairante de maldekstre, la du spacoj kaj la `@` ne estas en la klaso kaj estas preterlasataj; la unua kongrua signo estas `x`. (Ĉi tiu kombinita klaso estas proksima al tio, kion la mallongigo `\w` reprezentas.)

{% include nav.html %}
