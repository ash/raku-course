---
title: 'Risinājums: Lietotāja ievades konvertēšana par skaitli'
---

{% include menu.html %}

Programma var būt tik vienkārša kā šī:

## Kods

```raku
my Int $n = prompt 'Ievadiet skaitli: ';
say $n;
```

🦋 Avota kodu var atrast failā [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/input-number.raku).

## Piemērs

Palaidiet to un ievadiet veselu skaitli, vai nu pozitīvu vai negatīvu:

```console
$ raku exercises/typed-variables/input-number.raku
Ievadiet skaitli: -42
-42
```

## Komentāri

Kā mēs jau [redzējām](/lv/essentials/typed-variables/allomorphs), `prompt` atgrieztā vērtība ir `IntStr`, kuru var piešķirt `Int` mainīgajam bez piespiedu konvertēšanas.

Tomēr ņemiet vērā, ka programma tiks pārtraukta ar izņēmumu, ja ievadīsiet virkni, kuru nevar konvertēt uz veselu skaitli.

{% include nav.html %}