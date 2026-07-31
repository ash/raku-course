---
title: 'Risinājums: Izgūt tipizētu mainīgo'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my Int $n = 42;
dd $n;
```

🦋 Atrodiet programmu failā [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Izvade

```
Int $n = 42
```

## Komentāri

1. Tā kā mainīgajam ir deklarēts tips, `dd` šo tipu izdrukā pirms nosaukuma: `Int $n = 42`.

1. Mainīgais bez tipa tiktu izmests vienkārši kā `$n = 42`, bez tipa.

{% include nav.html %}
