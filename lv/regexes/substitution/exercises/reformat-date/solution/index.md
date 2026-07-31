---
title: 'Risinājums: Pārformatējiet datumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Atrodiet programmu failā [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Izvade

```
15/06/2025
```

## Komentāri

1. Raksturs satver gadu `$0`, mēnesi `$1` un dienu `$2`.

1. Aizstājums tos uzraksta jaunajā secībā `$2/$1/$0`, ar slīpsvītrām, kas atsvītrotas kā `\/`. Aizstājuma pusē nav apkārtējo atstarpju, jo atstarpes tur tiktu ieliktas burtiski.

{% include nav.html %}
