---
title: 'Risinājums: Dubultā noliegšana'
---

{% include menu.html %}

Paplašināsim programmu, lai atrisinātu uzdevuma otro daļu un atkārtoti izmantotu to pašu mainīgo:

## Kods

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Pilnu kodu var atrast failā [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/double-negation.raku).

## Komentāri

Pirms programmas palaišanas padomāsim, ko tā izdrukās. Pirms mainīgā ir divi nolieguma operatori. Tie darbojas kā divi nolieguma operatori. Pirmajā gadījumā vērtība tiek mainīta no `False` uz `True`, un tad uzreiz mainīta atpakaļ no `True` uz `False`. Otrajā gadījumā algoritms ir tāds pats: pēc diviem noliegumiem mēs iegūstam sākotnējo Boolea vērtību.

## Izvade

Programma izdrukā šādu izvadi, kas apstiprina iepriekš minētos apsvērumus:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}