---
title: 'Risinājums: Saglabājiet un izlasiet'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Atrodiet programmu failā [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Izvade

```
84
```

## Komentāri

1. `spurt` izveido failu un ieraksta tajā virkni; `slurp` nolasa visu failu atpakaļ virknē. Kopā tie ir pilns saglabāšanas un ielādes apļa brauciens.

1. Tas, kas nāk atpakaļ no `slurp`, ir teksts — `"42\n"` —, tāpēc pirms aritmētikas ar `trim` nogriežam beigu jauno rindu un izsaucam `.Int`, lai pārvērstu to par skaitli. Rezultāts `42 * 2` ir `84`.

1. Programma darbojas arī bez `.trim.Int`.

{% include nav.html %}
