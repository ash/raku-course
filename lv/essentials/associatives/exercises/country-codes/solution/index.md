---
title: 'Risinājums: Valstu kodi'
---

{% include menu.html %}

Šajā programmā koda konvertēšana uz nosaukumu tiek veikta kā heša meklēšana `%cc{$_}` ciklā pār `@codes` masīvu.

## Kods

Šeit ir iespējamais risinājums (ne visas valstis ir parādītas):

```raku
my %cc =
    AD => 'Andora',
    AE => 'Apvienotie Arābu Emirāti',

    # . . .

    ZM => 'Zambija',
    ZW => 'Zimbabve'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Atrodi programmu failā [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/country-codes.raku).

## Izvade

Dotajiem ievades kodiem programma izdrukā šādu valstu sarakstu:

```console
$ raku exercises/associatives/country-codes.raku
Francija
Itālija
Vācija
Igaunija
Latvija
Amerikas Savienotās Valstis
Ķīna
Indija
Brazīlija
```

{% include nav.html %}