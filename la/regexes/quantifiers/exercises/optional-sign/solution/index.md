---
title: 'Solutio: Signum optionale'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Inveni codicem fontem in archivo [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Exitus

```
｢-42｣
```

## Commentarii

1. Pars `'-'?` signum minus optionale congruit — nullum vel unum.

1. `\d+` deinde seriem cifrarum congruit. Idem exemplar etiam numerum sine signo, qualis `42`, congruit.

{% include nav.html %}
