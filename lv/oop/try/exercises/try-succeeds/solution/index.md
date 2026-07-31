---
title: 'Risinājums: Kad nekas nenoiet greizi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Atrodiet programmu failā [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Izvade

```
True
42
```

## Komentāri

1. Kad `try` bloks izpildās bez izņēmuma, tas vienkārši izrēķinās par bloka vērtību.

1. Tātad `$r` satur `42`, un `$r.defined` ir `True`.

{% include nav.html %}
