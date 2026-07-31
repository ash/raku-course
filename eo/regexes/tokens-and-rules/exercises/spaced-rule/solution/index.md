---
title: 'Solvo: Regulo kun spacoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Eligo

```
True
```

## Komentoj

1. Ĉar `TOP` estas `rule`, ĉiu spaco skribita inter la vokoj `<word>` postulas blankspacon en la enigo.

1. La ĉeno `'the quick fox'` havas spacojn inter ĉiuj tri vortoj, do ĝi analiziĝas. Kun `token` por `TOP`, la spacoj en la ŝablono estus ignorataj kaj la analizo malsukcesus.

{% include nav.html %}
