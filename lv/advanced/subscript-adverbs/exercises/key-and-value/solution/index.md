---
title: 'Risinājums: Atslēga un vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Atrodiet programmu failā [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Izvade

```
(x 10)
```

## Komentāri

1. Apstākļvārds `:kv` atgriež gan atslēgu, gan vērtību kā sarakstu.

1. Jauktenim atslēga ir tas nosaukums, ar ko indeksējat, tāpēc `%h<x>:kv` dod sarakstu `(x 10)`.

{% include nav.html %}
