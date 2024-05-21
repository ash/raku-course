---
title: Oplossing van 'Corrigeer de identificatoren'
---

{% include menu.html %}

Er is meer dan één manier om de identificatoren correct te maken. Enkele mogelijke opties worden hier getoond:

## Code

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Alle identificatoren zijn geldig, maar het is waarschijnlijk beter om namen met apostroffen te vermijden als je `$don't` geen sterke redenen hebt om ze te gebruiken.

🦋 Je kunt de broncode vinden in het bestand [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/identifiers.raku).

## Uitvoer

Dit programma genereert geen uitvoer, maar je zou geen fouten moeten krijgen wanneer Rakudo het compileert en uitvoert:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Opmerkingen

Laten we de problemen met de oorspronkelijke namen opsommen:

1. Spaties zijn niet toegestaan: `$ A G E`.
1. Een variabele heeft een sigil nodig: `Name` (het is mogelijk om sigilloze variabelen te hebben in Raku, maar ze kunnen nog steeds niet worden gedeclareerd als `my Name`).
1. Een apostrof (eigenlijk een enkele aanhalingsteken) kan geen naam beginnen: `$'Middle'Name`.
1. Een cijfer kan ook geen naam beginnen: `$2address`.
1. Twee streepjes kunnen niet samen staan: `$from--to`.

{% include nav.html %}