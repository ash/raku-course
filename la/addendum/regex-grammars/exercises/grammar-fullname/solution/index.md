---
title: 'Solutio: Grammatica nominum plenorum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Inveni codicem fontem in archivo [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Exitus

```
Grace
Hopper
```

## Commentarii

1. Marker `TOP` est ubi analysis incipit; ad alios markers secundum nomen refert
per `<first>` et `<last>`, qui claves in congruentia fiunt.

1. `$match<first>` obiectum congruentiae est; praefixum `~` illud in textum
congruentem simplicem vertit.

{% include nav.html %}
