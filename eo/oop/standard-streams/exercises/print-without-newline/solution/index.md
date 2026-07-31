---
title: 'Solvo: Presi sen linifino'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Vi povas trovi la fontkodon en la dosiero [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Eligo

```
abc
```

## Komentoj

1. `$*OUT.print` skribas sian tekston sen aldoni linifinon, do `a` kaj `b` restas sur la sama linio.

1. `$*OUT.say` skribas `c` kaj poste linifinon, finante la linion `abc`.

{% include nav.html %}
