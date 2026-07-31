---
title: 'Solvo: Unu gramatiko, du agoklasoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Eligo

```
30
-10
```

## Komentoj

1. La gramatiko nur priskribas la formon `number,number`; ĝi scias nenion pri tio, kion kalkuli.

1. La du agoklasoj alfiksas malsamajn signifojn al la sama analizo — unu sumigas la nombrojn, la alia subtrahas ilin. Transdoni malsaman objekton `actions` al `.parse` estas ĉio, kio necesas por ricevi malsaman rezulton, sen ŝanĝi la gramatikon entute.

{% include nav.html %}
