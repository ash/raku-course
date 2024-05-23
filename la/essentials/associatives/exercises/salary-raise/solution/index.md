---
title: 'Solutio: Auctus Salarialis'
---

{% include menu.html %}

Programma necesse est ut unum ex valoribus dati hash renovet. Assignatio novi valoris non multum differt ab assignatione novi valoris variabilis scalari.

## Codex

Hic est solutio:

```raku
my %employee =
    nomen-plenum => 'Eliza Vents',
    departmentum => 'Venditio',
    salarium => 3000;

my $auctus = 5; # in centesimis

%employee<salarium> *= (1 + $auctus / 100);
dic "Novum salarium %employee<nomen-plenum>: %employee<salarium>";
```

🦋 Inveni programma in archivo [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Output

Cum programma curris, fac ut validas computationes feceris et numerum centesimarum recte convertisti.

```console
$ raku exercises/associatives/salary-raise.raku
Novum salarium Eliza Vents: 3150
```

{% include nav.html %}