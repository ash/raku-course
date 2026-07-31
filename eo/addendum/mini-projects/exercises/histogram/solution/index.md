---
title: 'Solvo: Teksta histogramo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Eligo

```
apples	#####
pears	###
plums	########
```

## Komentoj

1. La ĉenripeta operatoro `x` konstruas ĉiun stangon: `'#' x 5` estas `#####`. La
valoro simple fariĝas la longo de la stango.

1. La `\t` inter la etikedo kaj la stango estas tabsigno, do la stangoj viciĝas
en kolumno anstataŭ komenciĝi tuj post ĉiu nomo de malsama longo.

{% include nav.html %}
