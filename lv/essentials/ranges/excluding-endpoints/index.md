---
title: Izslēdzot diapazona galapunktus
---

{% include menu.html %}

Lai izslēgtu vienu no malām vai abas, modificējiet diapazona izveides operatoru ar `^` rakstzīmi. Ir vēl trīs operatori, kurus var izveidot šādā veidā. Komentāros ir uzskaitīti skaitļi, kurus diapazoni ģenerē.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

Vienkāršos gadījumos, kā parādīts iepriekš, varat izlaist atstarpes ap diapazona operatoru:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Diapazonam, kas sākas ar 0, piemēram, `0..^5`, pastāv saīsināta sintakse: `^5`.

{% include nav.html %}