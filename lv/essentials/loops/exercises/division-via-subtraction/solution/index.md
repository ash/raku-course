---
title: 'Risinājums: Dalīšana, izmantojot atņemšanu'
---

{% include menu.html %}

Dalīšana ir atkārtota atņemšana. Programmā ir `while` cikls, kas samazina `$a` par `$b` vērtību un atkārto to, kamēr pašreizējā `$a` vērtība nav mazāka par `$b`. Mainīgais `$n` skaita iterāciju skaitu, un tas ir arī rezultāts, kas mums nepieciešams.

## Kods

Šeit ir pilna programma:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Atrodiet programmu failā [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/division-via-subtraction.raku).

## Izvade

Palaidiet programmu vairākas reizes. Sāciet ar dotajām vērtībām, kas dod precīzu veselu skaitli:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Tāpat mēģiniet, piemēram, mainīt `$b` uz `20` un pārliecinieties, ka rezultāts ir pareizs:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}