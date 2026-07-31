---
title: 'Risinājums: Filtrēšana ar bloku'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Atrodiet programmu failā [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Izvade

```
5
```

## Komentāri

1. `grep` ņem bloku `* > 5` un patur skaitļus, kuriem tas ir patiess: `6, 7, 8, 9, 10`.

1. `.elems` tos saskaita, dodot `5`.

{% include nav.html %}
