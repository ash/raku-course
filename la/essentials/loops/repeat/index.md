---
title: Usus repetendi
---

{% include menu.html %}

Blocki `dum` et `donec` numquam exsequi possunt si condicio initio `Falsa` est. Contra, blockum `repetere` semper saltem semel exsequitur. Condicio cessationis post codicem blockum inspicitur. Eadem verba `dum` vel `donec` ad probationem uteris.

Considera hoc programma.

```raku
meum $x = 100;
repetere {
    $x = rogare 'Intra numerum: ';
    dic "Intrasti $x.";
} dum $x <= 10;
dic "$x maior est quam 10.";
```

Variabilis `$x` initio ad `100` ponitur, et condicio `dum` inspicit utrum `$x` minor vel aequalis `10` sit. Cum data variabilis valore, condicio iam `Falsa` est, sed codex blockum adhuc primo exsequitur.

```console
$ raku t.raku
Intra numerum: 10
Intrasti 10.
Intra numerum: 20
Intrasti 20.
20 maior est quam 10.
```

Mutemus programma ut `donec` utatur.

```raku
meum $x = 0;
repetere {
    $x = rogare 'Intra numerum: ';
    dic "Intrasti $x.";
} donec $x > 10;
dic "$x maior est quam 10.";
```

Eum currere ut confirmes operari ut expectatur:

```console
$ raku t.raku
Intra numerum: 5
Intrasti 5.
Intra numerum: 15
Intrasti 15.
15 maior est quam 10.
```

{% include nav.html %}