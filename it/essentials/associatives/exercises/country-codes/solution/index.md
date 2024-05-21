---
title: 'Soluzione: Codici dei paesi'
---

{% include menu.html %}

In questo programma, la conversione di un codice in un nome viene effettuata come una ricerca hash `%cc{$_}` in un ciclo sull'array `@codes`.

## Codice

Ecco la possibile soluzione (non tutti i paesi sono mostrati):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'Emirati Arabi Uniti',

    # . . .

    ZM => 'Zambia',
    ZW => 'Zimbabwe'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Trova il programma nel file [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/country-codes.raku).

## Output

Per i codici di input forniti, il programma stampa il seguente elenco di paesi:

```console
$ raku exercises/associatives/country-codes.raku
Francia
Italia
Germania
Estonia
Lettonia
Stati Uniti d'America
Cina
India
Brasile
```

{% include nav.html %}