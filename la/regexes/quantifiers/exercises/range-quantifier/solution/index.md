---
title: 'Solutio: A duobus ad quattuor'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Inveni codicem fontem in archivo [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Exitus

```
｢abcd｣
```

## Commentarii

1. `\w ** 2..4` a duobus ad quattuor characteres verbi congruit.

1. Avidus cum sit, tot capit quot intervallum permittit — quattuor — itaque congruentia est `abcd`.

{% include nav.html %}
