---
title: 'Solvo: Transmetu matricon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Vi povas trovi la fontkodon en la dosiero [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Eligo

```
((1 4) (2 5) (3 6))
```

## Komentoj

1. La zipa metaoperatoro `Z` parigas elementojn laŭ pozicio. Uzata kiel redukto
`[Z]`, ĝi zipas ĉiujn vicojn kune, transformante kolumnojn en vicojn — ĝuste
transmeto.

{% include nav.html %}
