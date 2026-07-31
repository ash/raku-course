---
title: 'Utendo `repeat`'
---

{% include menu.html %}

Blocki `while` et `until` numquam exsequi possunt si condicio initio `False` est. Contra, blockum `repeat` semper saltem semel exsequitur. Condicio cessationis post codicem blockum inspicitur. Eadem verba `while` vel `until` ad probationem uteris.

Considera hoc programma.

```raku
my $x = 100;
repeat {
    $x = prompt 'Intra numerum: ';
    say "Intrasti $x.";
} while $x <= 10;
say "$x maior est quam 10.";
```

Variabilis `$x` initio ad `100` ponitur, et condicio `while` inspicit utrum `$x` minor vel aequalis `10` sit. Cum data variabilis valore, condicio iam `False` est, sed codex blockum adhuc primo exsequitur.

```console
$ raku t.raku
Intra numerum: 10
Intrasti 10.
Intra numerum: 20
Intrasti 20.
20 maior est quam 10.
```

Mutemus programma ut `until` utatur.

```raku
my $x = 0;
repeat {
    $x = prompt 'Intra numerum: ';
    say "Intrasti $x.";
} until $x > 10;
say "$x maior est quam 10.";
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