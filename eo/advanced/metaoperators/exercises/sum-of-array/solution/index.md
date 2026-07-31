---
title: 'Solvo: Mezumo de tabelo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Eligo

```
25
```

## Komentoj

1. La redukta meta-operatoro `[+]` metas la operatoron `+` inter ĉiujn elementojn de `@data`, do `[+] @data` egalas al `10 + 20 + 30 + 40`, tio estas `100`. La krampoj estas bezonataj por ke la redukto okazu antaŭ la divido.

1. Dividante la sumon per `@data.elems`, la nombro de elementoj, oni ricevas la meznombron `25`. Se la rezulto ne dividus egale, Raku estus produktinta ekzaktan `Rat` anstataŭ rondigi.

{% include nav.html %}
