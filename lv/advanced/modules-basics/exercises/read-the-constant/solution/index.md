---
title: 'Risinājums: Nolasīt konstanti'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

Programma `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Izvade

```console
$ raku -I. read-pi.raku
3.14
```

## Komentāri

1. `need Circle` ielādē moduli, bet neimportē nevienu nosaukumu, tāpēc kails `$pi` netiktu atpazīts.

1. `our` mainīgais tiek sasniegts caur moduļa nosaukumu, rakstot `$Circle::pi`.

{% include nav.html %}
