---
title: loop
---

{% include menu.html %}

`loop` enuntiatum est constructum in Raku quod multum commune habet cum traditionalibus loopis in C programmando lingua et eius cognatis. Accipit tres enuntiationes: initialiser, test, et enuntiatum ad variabilem loopis modificandam. Corpus loopis iterum atque iterum exequitur dum test manet `Verum`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "The current value of the counter is $c.";
}
```

Hic, `++` est operator postfixus qui argumentum suum per 1 auget. Plures operatores in secunda parte cursus tractabimus.

Programma corpus loopis quinquies exequitur.

```console
$ raku t.raku
The current value of the counter is 0.
The current value of the counter is 1.
The current value of the counter is 2.
The current value of the counter is 3.
The current value of the counter is 4.
```

Aliquae, vel etiam omnes, enuntiationes in capite `loop` omitti possunt. Exempli gratia, hic est idem programma:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "The current value of the counter is $c.";
    $c++;
}
```

## * * *

`loop` loopi sunt, probabiliter, minime usitati loopi in Raku. Inveniri possunt, exempli gratia, in automato interprete a C ad Raku. In Raku, tamen, sunt commodiores loopi sicut `for`, quos mox examinabimus.

{% include nav.html %}