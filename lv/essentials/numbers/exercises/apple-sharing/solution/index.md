---
title: 'Risinājums: Ābolu dalīšana'
---

{% include menu.html %}

Šeit ir risinājums problēmai.

## Kods

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Katrs cilvēks saņem $gets ābolu(s).";
say "Paliek $remains ābolu(s).";
```

🦋 Pilnu kodu var atrast failā [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/apple-sharing.raku).

## Izvade

Ar ievades skaitļiem 3 un 11, programma izvada sekojošo:

```console
$ raku exercises/numbers/apple-sharing.raku
Katrs cilvēks saņem 3 ābolu(s).
Paliek 2 ābolu(s).
```

Mainiet sākotnējo `$N` un `$K` vērtību, lai modelētu citas situācijas:

* `$K` ir `$N` reizinājums, piemēram, `12` un `3`;
* `$K` ir vienāds ar `$N`;
* `$K` ir mazāks par `$N`.

## Komentāri

Programmā mēs izmantojam divus operatorus: `div` veselu skaitļu dalīšanai un `%` atlikuma iegūšanai no dalīšanas. Alternatīvi, jūs varat veikt aprēķinus šādā veidā:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Tāpat pievērsiet uzmanību, kā mainīgie tiek interpolēti virknē.

{% include nav.html %}