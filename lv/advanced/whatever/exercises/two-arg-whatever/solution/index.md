---
title: 'Risinājums: Divu argumentu Whatever'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Atrodiet programmu failā [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Izvade

```
a-b
```

## Komentāri

1. Izteiksmē ir divas zvaigznītes, tāpēc Raku uzbūvē `WhateverCode`, kas ņem divus argumentus — pirmā zvaigznīte ir pirmais arguments, otrā zvaigznīte ir otrais.

1. Izsaucot `$join('a', 'b')`, zvaigznītes tiek aizpildītas secībā, dodot `'a' ~ '-' ~ 'b'`, kas ir `a-b`.

{% include nav.html %}
