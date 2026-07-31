---
title: 'Solvo: Reformatu daton'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Vi povas trovi la fontkodon en la dosiero [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Eligo

```
15/06/2025
```

## Komentoj

1. La ŝablono kaptas la jaron en `$0`, la monaton en `$1`, kaj la tagon en `$2`.

1. La anstataŭaĵo skribas ilin en la nova ordo `$2/$1/$0`, kun la oblikvoj eskapitaj kiel `\/`. La anstataŭa flanko havas neniujn ĉirkaŭajn spacojn, ĉar spacoj tie estus enmetitaj laŭvorte.

{% include nav.html %}
