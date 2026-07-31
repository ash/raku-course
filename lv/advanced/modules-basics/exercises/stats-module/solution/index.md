---
title: 'Risinājums: Statistikas modulis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

Programma `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Izvade

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Komentāri

1. Viens `use Stats` ienes *abas* eksportētās apakšprogrammas uzreiz — `use` importē visu, ko modulis atzīmējis ar `is export`, nevis tikai vienu nosaukumu.

1. `mean` moduļa iekšienē izsauc `total`. Programma pati `total` tur neizsauc, un tomēr tas darbojas: moduļa apakšprogrammas var paļauties viena uz otru, un izsaucējs redz tikai eksportētos nosaukumus.

1. Četriem skaitļiem, kas saskaitās par `100`, vidējais ir `100 / 4`, kas ir `25`.

{% include nav.html %}
