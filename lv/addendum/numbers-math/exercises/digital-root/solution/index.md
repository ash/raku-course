---
title: 'Risinājums: Ciparu sakne'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Atrodiet programmu failā [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Izvade

```
3
```

## Komentāri

1. `$n.comb` sadala skaitli atsevišķās ciparu rakstzīmēs; `[+]` tās saskaita,
virknes automātiski pārvēršot skaitļos.

1. Cikls atkārtojas, kamēr rezultātā vēl ir vairāk nekā viens cipars, tāpēc tas
apstājas, tiklīdz `$n` nokrīt zem `10`.

{% include nav.html %}
