---
title: 'Solution: Ländercodes'
---

{% include menu.html %}

In diesem Programm wird die Umwandlung eines Codes in einen Namen als Hash-Lookup `%cc{$_}` in einer Schleife über das Array `@codes` durchgeführt.

## Code

Hier ist die mögliche Lösung (nicht alle Länder sind gezeigt):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'Vereinigte Arabische Emirate',

    # . . .

    ZM => 'Sambia',
    ZW => 'Simbabwe'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Finde das Programm in der Datei [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Ausgabe

Für die gegebenen Eingabecodes druckt das Programm die folgende Liste von Ländern:

```console
$ raku exercises/associatives/country-codes.raku
Frankreich
Italien
Deutschland
Estland
Lettland
Vereinigte Staaten von Amerika
China
Indien
Brasilien
```

{% include nav.html %}