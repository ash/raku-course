---
title: 'Solution: Item of lijst'
translations_gpt: The solution of 'Item or list'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Je kunt de broncode vinden in het bestand [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Uitvoer

```
3
```

## Opmerkingen

1. `my $x = $(@a)` dwingt itemcontext af, zodat de hele array in de enkele scalar `$x` wordt verpakt in plaats van uitgespreid.

1. `@($x)` dwingt vervolgens lijstcontext af en spreidt `$x` weer uit tot zijn drie elementen. De `for`-lus wordt daarom drie keer uitgevoerd, waardoor de teller op `3` komt. De twee contextomzetters zijn exacte tegengestelden: `$( )` verpakt een lijst tot één item, `@( )` pakt het weer uit.

{% include nav.html %}
