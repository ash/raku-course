---
title: 'Solutio: Congruentia frugalis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Inveni codicem fontem in archivo [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Exitus

```
｢"hi"｣
```

## Commentarii

1. `?` post `.+` quantificatorem frugalem reddit, itaque quam paucissimos characteres congruit.

1. Ideo ad primam `"` claudentem consistit, solum `"hi"` capiens. Avidum `.+` usque ad ultimam `"` cucurrisset et `"hi" and "bye"` congruisset.

{% include nav.html %}
