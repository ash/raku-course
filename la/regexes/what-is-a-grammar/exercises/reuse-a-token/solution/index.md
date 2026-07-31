---
title: 'Solutio: Tessera iterum utere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Inveni codicem fontem in archivo [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Exitus

```
｢cat｣
｢dog｣
```

## Commentarii

1. Eadem expressio regularis nominata `word` bis in exemplari vocatur.

1. Cum captura nominata plus quam semel occurrit, effectus seriem formant, itaque ut `$<word>[0]` et `$<word>[1]` leguntur.

{% include nav.html %}
