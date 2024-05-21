---
title: Risinājums 'Koriģēt identifikatorus'
---

{% include menu.html %}

Ir vairāk nekā viens veids, kā padarīt identifikatorus pareizus. Dažas iespējamās opcijas ir parādītas šeit:

## Kods

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Otrā iela, 12';
my $from-to = 'Londona uz Parīzi';
```

Visi identifikatori ir derīgi, bet, iespējams, labāk izvairīties no nosaukumiem ar apostrofiem, ja jums `$nav` spēcīgu iemeslu tos izmantot.

🦋 Jūs varat atrast avota kodu failā [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/identifiers.raku).

## Izvade

Šī programma nerada nekādu izvadi, bet jums nevajadzētu saņemt nekādas kļūdas, kad Rakudo to kompilē un izpilda:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Komentāri

Uzskaitīsim problēmas ar sākotnējiem nosaukumiem:

1. Atstarpes nav atļautas: `$ A G E`.
1. Mainīgajam ir nepieciešams sigils: `Name` (Raku ir iespējams izmantot mainīgos bez sigiliem, bet tos joprojām nevar deklarēt kā `my Name`).
1. Apostrofs (faktiski vienkāršs pēdiņš) nevar sākt nosaukumu: `$'Middle'Name`.
1. Cipars arī nevar sākt nosaukumu: `$2address`.
1. Divi domuzīmes nevar būt kopā: `$from--to`.

{% include nav.html %}