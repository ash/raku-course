---
title: 'Risinājums: Dzēst atslēgu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Atrodiet programmu failā [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Izvade

```
2
```

## Komentāri

1. Apstākļvārds `:delete` noņem ierakstu no jaukteņa (šeit vērtību, ko tas atgriež, mēs ignorējam).

1. Jauktenis sākās ar trim ierakstiem un tagad tam ir `2`, kas apstiprina, ka viens noņemts. Skaitīšana ar `.elems` padara izvadi paredzamu, nepaļaujoties uz atslēgu secību.

{% include nav.html %}
