---
title: 'Risinājums: Tipizēts MAIN'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Atrodiet programmu failā [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Izvade

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Komentāri

1. Ierobežojums `Int` nozīmē, ka komandrindas vārdam jāizskatās pēc vesela skaitļa. Ar `5` tas piesaistās `$n`, un ķermenis izdrukā `10`.

1. Ar `abc` vērtība par `Int` kļūt nevar, tāpēc paraksts neatbilst. Raku ķermeni neizpilda — tā vietā tas izdrukā ģenerēto lietošanas paziņojumu, dodot jums argumentu pārbaudi bez jebkādām pašrocīgām pārbaudēm.

{% include nav.html %}
