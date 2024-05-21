---
title: Risinājums ‘Kvadrāti un kubi’
---

{% include menu.html %}

## Kods 1

Vienkāršs risinājums ir izmantot `**` operatoru.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Atrodi programmu failā [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube.raku).

## Kods 2

Nedaudz stilīgāks risinājums ir izmantot Unicode virsrakstus.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Atrodi programmu failā [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube-2.raku).

## Izvade

Palaid programmu vairākas reizes un pārbaudi to ar dažādiem skaitļiem.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}