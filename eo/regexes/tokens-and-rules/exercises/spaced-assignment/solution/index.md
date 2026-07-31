---
title: 'Solvo: Valorizo kun spacoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Eligo

```
True
```

## Komentoj

1. Ĉar `TOP` estas `rule`, la spacoj en la ŝablono permesas blankspacon ĉirkaŭ la `=` en la enigo.

1. Do `'x = 5'` analiziĝas. Kun `token` por `TOP`, nur `'x=5'` kongruus.

La blankspaco, kiun `rule` permesas, estas **nedeviga**, ne postulata: la signifa spaco kongruas kun *nul* spacoj same volonte kiel kun unu, do la sen-spaca formo ankaŭ analiziĝas:

```raku
say Assign.parse('x=5').defined; # True
```

La `rule` do akceptas `'x = 5'`, `'x=5'` kaj eĉ `'x =5'` egale — fleksebleco sen literumi, kie spaco rajtas aŭ ne rajtas esti.

{% include nav.html %}
