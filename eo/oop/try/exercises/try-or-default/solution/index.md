---
title: 'Solvo: Provo aŭ defaŭlta valoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Vi povas trovi la fontkodon en la dosiero [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Eligo

```
default
```

## Komentoj

1. La malsukcesanta bloko `try` taksiĝas al nedifinita valoro.

1. La operatoro `//` do redonas sian dekstran flankon, `'default'`, donante puran manieron resaniĝi per retiriĝo en unu sola linio.

{% include nav.html %}
