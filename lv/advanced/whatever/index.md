---
title: Whatever zvaigzne 🆕
translations_gpt:
---

{% include menu.html %}

Jūs, iespējams, esat redzējuši `*`, kas lietots izteiksmēs, piemēram, `* * 2` vai `* %% 2`, izsaucot `map` un `grep`. Šī `*` ir _Whatever zvaigznīte_, un izteiksme ap to uz vietas uzbūvē mazu viena argumenta funkciju. Šī sadaļa paskaidro, kas tā īsti ir, kā tā saistās ar bloku un kur kailā zvaigznīte nozīmē vienkārši «cik nu vēlaties».

## Zvaigznīte veido funkciju

Kad izteiksmē parādās `*`, Raku pārvērš visu izteiksmi par funkciju — `WhateverCode` —, kurā zvaigznīte apzīmē argumentu:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` ir funkcija, kas savu vienīgo argumentu reizina ar diviem. Tieši tāpēc darbojas `(1..5).map(* * 2)`: `map` saņem tieši tādu viena argumenta funkciju.

## Whatever pret bloku

Whatever izteiksme ir īsāks veids, kā uzrakstīt funkciju, ko varētu uzrakstīt arī kā bloku. Šie trīs ir līdzvērtīgi:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

Whatever forma nenosauc nevienu parametru; bloka forma izmanto tēmas mainīgo `$_`; bultiņas forma nosauc `$x`. Pēdējā, `-> $x { ... }`, pati par sevi ir maza funkcija — ar to pienācīgi iepazīsieties sadaļā [Anonīmas apakšprogrammas](/lv/advanced/anonymous-subroutines); šeit pietiek to lasīt kā trešo veidu, kā pierakstīt to pašu viena argumenta funkciju. Vienkāršai izteiksmei zvaigznīte ir viskompaktākā, un tieši tāpēc tā ir tik izplatīta ar `map`, `grep` un `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Ķerieties pie **bloka**, kad loģikai vajag vairāk nekā vienu izteiksmi vai kad skaidrāks nosaukts parametrs palīdz. Ķerieties pie **zvaigznītes**, kad īsa izteiksme pasaka visu.

## Vairāk nekā viena zvaigznīte

Katra `*` izteiksmē ir atsevišķs arguments, secībā. Tātad divas zvaigznītes veido **divu** argumentu funkciju:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Šeit `* + *` ir divu argumentu funkcija, kas saskaita savus argumentus — piemēram, uzkrāto summu un nākamo elementu.

## Kailā Whatever

Pati par sevi `*` nozīmē «cik nu ir» — cik vien ir vai bez ierobežojuma. Divi ikdienišķi lietojumi:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * is the array length, so *-1 is the last index

say (1..*).head(3); # (1 2 3)  — 1..* is an open-ended range
```

Izteiksmē `@a[*-1]` zvaigznīte apzīmē elementu skaitu, bet `1..*` tā nozīmē «bez augšējās robežas». Vai tā būvē funkciju, vai nozīmē «cik nu vēlaties», zvaigznīte ir viens no noderīgākajiem Raku saīsinājumiem.

{% include nav.html %}
