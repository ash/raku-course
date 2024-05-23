---
title: 'Solvo: Neparaj indeksoj'
---

{% include menu.html %}

Por solvi ĉi tiun taskon, vi povas uzi la `loop` konstruon kaj pliigi la buklan variablon per 2 en ĉiu iteracio. Sed vi ankaŭ povas uzi `for` buklon kaj skani la nombrojn de 1 ĝis la duono de la longo de la tabelo, kaj tiam multobligi ilin per du.

## Kodo

Jen la solvo:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Trovu la programon en la dosiero [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Eligo

Unue, rulu la programon kun la originalaj datumoj.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Tiam, aldonu unu plian elementon al la datumoj:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Konfirmu ke la nova elemento kun nepara indekso aperas en la eligo:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Komentoj

En la sekva parto de la kurso, ni revenos al ĉi tiu tasko por solvi ĝin uzante tute malsaman aliron.

{% include nav.html %}