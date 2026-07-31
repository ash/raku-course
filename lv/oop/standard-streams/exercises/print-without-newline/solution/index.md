---
title: 'Risinājums: Izvade bez jaunas rindas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Atrodiet programmu failā [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Izvade

```
abc
```

## Komentāri

1. `$*OUT.print` raksta savu tekstu, nepievienojot jaunu rindu, tāpēc `a` un `b` paliek vienā rindā.

1. `$*OUT.say` uzraksta `c` un pēc tam jaunu rindu, pabeidzot rindu `abc`.

{% include nav.html %}
