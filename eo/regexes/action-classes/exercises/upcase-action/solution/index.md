---
title: 'Solvo: Ago per majuskloj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Eligo

```
HELLO
```

## Komentoj

1. La gramatiko kaptas la vorton; la agoklaso decidas, kion fari kun ĝi.

1. `$<word>.Str` donas la kongruintan tekston kaj `.uc` majuskligas ĝin, kaj tio estas, kion `make` konservas sur la kongruo.

{% include nav.html %}
