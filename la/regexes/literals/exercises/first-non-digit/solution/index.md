---
title: 'Solutio: Prima littera non numeralis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say '42abc' ~~ /\D/;
```

🦋 Inveni codicem fontem in archivo [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Exitus

```
｢a｣
```

## Commentarii

1. `\D` contrarium `\d` est: quemlibet characterem congruit qui cifra non est.

1. Primi duo characteres cifrae sunt, itaque congruentia ab `a` incipit.

{% include nav.html %}
