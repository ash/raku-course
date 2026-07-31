---
title: 'Solutio: Assignatio cum spatiis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Inveni codicem fontem in archivo [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Exitus

```
True
```

## Commentarii

1. Quia `TOP` `rule` est, spatia in exemplari spatium album circa `=` in introitu permittunt.

1. Itaque `'x = 5'` analysatur. Cum `token` pro `TOP`, sola `'x=5'` congrueret.

Spatium album quod `rule` permittit **optionale** est, non necessarium: spatium significans *nulla* spatia tam libenter congruit quam unum, itaque forma sine spatiis quoque analysatur:

```raku
say Assign.parse('x=5').defined; # True
```

`rule` ideo `'x = 5'`, `'x=5'`, et etiam `'x =5'` pariter accipit — flexibilitas sine eo quod explices ubi spatium esse possit vel non.

{% include nav.html %}
