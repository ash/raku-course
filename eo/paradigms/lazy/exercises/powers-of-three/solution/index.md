---
title: 'Solvo: Potencoj de tri'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Eligo

```
(1 3 9 27 81)
```

## Komentoj

1. La fermaĵo `* * 3` estas la regulo por la sekva termo: prenu la kurantan kaj multipliku per tri. Doni la regulon eksplicite estas pli fidinde ol lasi la operatoron diveni el la unuaj kelkaj termoj.

1. La finpunkto `*` faras la serion senfina, kaj `.head(5)` prenas la unuajn kvin.

{% include nav.html %}
