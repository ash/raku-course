---
title: 'Solutio: Omnes numeri'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Inveni codicem fontem in archivo [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Exitus

```
5+10+15
```

## Commentarii

1. `\d+` totam cifrarum seriem congruit, et `:g` omnem talem seriem colligit — hic `5`, `10` et `15`.

1. Unaquaeque congruentia obiectum congruentiae est, itaque `.map(*.Str)` ea in catenas simplices vertit antequam ea per `+` coniungas.

{% include nav.html %}
