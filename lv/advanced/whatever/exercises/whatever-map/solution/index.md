---
title: 'Risinājums: Whatever ar map'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Atrodiet programmu failā [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Izvade

```
(3 6 9 12)
```

## Komentāri

1. `* * 3` ir Whatever izteiksme, kas kļūst par viena argumenta `WhateverCode` — pilnīgi parastu funkcijas vērtību, kas saglabāta `$triple`.

1. Tā kā tā vienkārši ir funkcija, `map` to pieņem tāpat kā jebkuru bloku un piemēro katram `1..4` elementam, dodot `(3 6 9 12)`.

{% include nav.html %}
