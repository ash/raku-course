---
title: 'Risinājums: Izgūt hešu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Atrodiet programmu failā [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Izvade

```
{:alpha(1), :beta(2)}
```

## Komentāri

1. `dd` izdrukā jaukteni kodam līdzīgā formā, kur katrs pāris ir `:atslēga(vērtība)`.

1. Atslēgas iznāk sakārtotā secībā — `alpha` pirms `beta` —, lai gan `beta` bija uzrakstīta pirmā.

{% include nav.html %}
