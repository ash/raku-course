---
title: 'Risinājums: Daudzskaitļa beigas'
---

{% include menu.html %}

Programmai jāpārbauda, vai ievadītais skaitlis ir lielāks par vienu, un jāievieto to daudzskaitļa formā.

## Kods

```raku
my $n = prompt 'How many files to copy? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copied.";
```

🦋 Atrodi programmu failā [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/plural-ending.raku).

## Izvade

Palaid programmu vismaz divas reizes un pārbaudi to ar ievadi `1` un ar jebkuru citu pozitīvu veselu skaitli:

```console
$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 10
10 files copied.

$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 1
1 file copied.
```

## Komentārs

Jūs, iespējams, varat kļūdaini ievadīt vienu `?` tā vietā, lai ievadītu dubultu `??` un/vai kolu `:` tā vietā, lai ievadītu `!!`.

{% include nav.html %}