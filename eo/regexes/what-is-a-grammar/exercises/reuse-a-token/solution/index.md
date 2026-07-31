---
title: 'Solvo: Reuzu ĵetonon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Eligo

```
｢cat｣
｢dog｣
```

## Komentoj

1. La sama nomita regulesprimo `word` estas vokata dufoje en la ŝablono.

1. Kiam nomita kapto okazas pli ol unufoje, la rezultoj formas liston, do ili estas legataj kiel `$<word>[0]` kaj `$<word>[1]`.

{% include nav.html %}
