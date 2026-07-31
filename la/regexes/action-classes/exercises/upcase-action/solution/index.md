---
title: 'Solutio: Actio litterarum maiorum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Inveni codicem fontem in archivo [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Exitus

```
HELLO
```

## Commentarii

1. Grammatica verbum capit; classis actionum decernit quid cum eo agatur.

1. `$<word>.Str` textum congruentem dat et `.uc` illum litteris maioribus reddit, et id est quod `make` in congruentia servat.

{% include nav.html %}
