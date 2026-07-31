---
title: 'Solutio: Spatia normaliza'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Inveni codicem fontem in archivo [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Exitus

```
too many spaces
```

## Commentarii

1. `.trim` spatia praecedentia et sequentia removet; substitutio deinde
omnem seriem spatiorum `\s+` uno spatio substituit.

1. Adverbium `:g` substitutionem globalem facit, itaque *omnia* intervalla contrahuntur,
non solum primum.

{% include nav.html %}
