---
title: 'Risinājums: Plānot divas pārbaudes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Atrodiet programmu failā [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Izvade

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Komentāri

1. `plan 2` pasaka skaitu, pirms izpildās kaut viens tests, tāpēc rinda `1..2` parādās pirmā. Ja fails pēc tam izpildītu citu pārbaužu skaitu, kopa tiktu ziņota kā neizdevusies — drošības tīkls, ko `done-testing` dot nevar.

1. `is-deeply` salīdzina abus sarakstus uz precīzu, tipu ievērojošu vienlīdzību. `3, 1, 2` sakārtošana dod `1, 2, 3`, kas sakrīt.

1. `is` salīdzina divas vērtības uz vienkāršu vienlīdzību un neveiksmes gadījumā ziņo abas. Šeit `10 % 3` ir `1`, kas sakrīt ar gaidīto vērtību, tāpēc arī otrais tests izdodas.

{% include nav.html %}
