---
title: 'Solutio: Verbum aut numerus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Inveni codicem fontem in archivo [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Exitus

```
｢5｣
```

## Commentarii

1. Alternatio litterale, `cat`, cum classe characterum, `\d`, miscet. Exemplar eam alternativam congruit quaecumque prima in catena invenitur.

1. Nullum `cat` in `item 5` est, sed cifra adest, itaque `\d` `5` congruit.

{% include nav.html %}
