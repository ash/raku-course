---
title: 'Solutio: Regula cum spatiis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Inveni codicem fontem in archivo [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Exitus

```
True
```

## Commentarii

1. Quia `TOP` `rule` est, unumquodque spatium inter vocationes `<word>` scriptum spatium album in introitu postulat.

1. Catena `'the quick fox'` spatia inter omnia tria verba habet, itaque analysatur. Cum `token` pro `TOP`, spatia in exemplari neglegerentur et analysis deficeret.

{% include nav.html %}
