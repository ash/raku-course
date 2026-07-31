---
title: 'Solvo: Fina mesaĝo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Vi povas trovi la fontkodon en la dosiero [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Eligo

```
processed 3 items
```

## Komentoj

1. La `END`-phaser estas skribita antaŭ la buklo, sed ĝi ruliĝas laste — post kiam la ĉefa kodo finiĝis. Ĝis tiam `$count` estis pligrandigita trifoje.

1. Ĉar la phaser fermas super `$count`, ĝi legas la *finan* valoron de la variablo, ne la `0`, kiun ĝi havis kiam la phaser aperis en la fontkodo. Tio estas la kutima kialo meti resumon en `END`.

{% include nav.html %}
