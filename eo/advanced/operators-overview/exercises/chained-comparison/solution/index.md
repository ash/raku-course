---
title: 'Solvo: Ĉenita komparo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 0 <= 73 <= 100;
```

🦋 Vi povas trovi la fontkodon en la dosiero [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Eligo

```
True
```

## Komentoj

1. Komparaj operatoroj povas esti ĉenitaj, do `0 <= 73 <= 100` legiĝas kiel «0 estas maksimume 73, kaj 73 estas maksimume 100». La operatoro `<=` permesas la finpunktojn, do poentaro de ekzakte `0` aŭ `100` ankaŭ validus.

1. Ambaŭ partoj estas veraj, do la tuta esprimo estas `True`. Notu, ke la meza valoro `73` estas skribita nur unufoje, kvankam ĝi estas komparata kun ambaŭ najbaroj.

1. Sen la ĉenado, vi devus literumi ambaŭ komparojn kaj kunigi ilin per `&&`, ripetante la mezan valoron: `0 <= 73 && 73 <= 100`. La ĉenita formo diras la samon pli koncize.

{% include nav.html %}
