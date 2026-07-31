---
title: 'Risinājums: Pārtveriet kļūdu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Atrodiet programmu failā [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Izvade

```
42
False
broken
```

## Komentāri

1. Kad bloks izpildās bez kļūdas, `try` vienkārši izrēķinās par bloka vērtību, tāpēc `$ok` satur `42`.

1. `die` otrā bloka iekšienē izmet izņēmumu, tāpēc šis bloks izrēķinās par nedefinētu vērtību un `$bad.defined` ir `False`.

1. Noķertais izņēmums glabājas speciālajā mainīgajā `$!`, un `$!.message` atgriež tam doto tekstu `broken`.

{% include nav.html %}
