---
title: 'Solvo: Ero aŭ listo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Vi povas trovi la fontkodon en la dosiero [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Eligo

```
3
```

## Komentoj

1. `my $x = $(@a)` trudas eran kuntekston, do la tuta tabelo estas pakita en la solan skalaron `$x` anstatau disvastighita.

1. `@($x)` poste trudas listan kuntekston, disvastigante `$x` reen al ghiaj tri elementoj. La buklo `for` do rulighas tri fojojn, lasante la kalkulilon che `3`. La du kuntekstigiloj estas ghustaj maloj: `$( )` pakas liston en unu eron, `@( )` malpakas ghin reen.

{% include nav.html %}
