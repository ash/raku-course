---
title: 'Risinājums: Sareiziniet pāri'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Atrodiet programmu failā [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Izvade

```
20
```

## Komentāri

1. Abi skaitļi tiek satverti kā `<a>` un `<b>`, katrs pārveidots ar `.Int`.

1. Iekšējais bloks apvieno apakšsakritības — tās sareizinot — un saglabā rezultātu uz sakritības, ko `made` tad atgriež.

{% include nav.html %}
