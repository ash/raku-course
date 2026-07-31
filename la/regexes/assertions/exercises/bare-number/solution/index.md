---
title: 'Solutio: Numerus nudus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Inveni codicem fontem in archivo [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Exitus

```
｢5｣
```

## Commentarii

1. `<!after '$'>` respectus negativus est: succedit solum cum littera statim ante locum currentem `$` **non** est. Illum vicinum inspicit sine eo consumendo.

1. `9` reicitur quia statim post `$` sedet, itaque machina priorem `5` loco eius congruit, ubi nihil praecedit.

{% include nav.html %}
