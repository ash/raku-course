---
title: usque
---

{% include menu.html %}

Constructum `usque` contrarium est `dum`. Exsequitur codicem donec condicio fit `Vera` (vel, aliter dicendo, dum est `Falsa`).

Hic est modificatus [programma ex pagina praecedenti](../while) quod utitur `usque` et nova condicione:

```raku
my $x = 0;
usque $x > 10 {
    $x = prompt 'Intra numerum, qui non est maior quam 10: ';
    dic "Intrasti $x.";
}
dic "$x est maior quam 10.";
```

Curre programmam et inspice exitum:

```console
$ raku t.raku 
Intra numerum, qui non est maior quam 10: 10
Intrasti 10.
Intra numerum, qui non est maior quam 10: 4
Intrasti 4.
Intra numerum, qui non est maior quam 10: 1
Intrasti 1.
Intra numerum, qui non est maior quam 10: 20
Intrasti 20.
20 est maior quam 10.
```

## `usque` vs. `dum`

Compara aequivalentes programmata cum `dum` et `usque`:

```raku
dum $x <= 10 { . . . }

usque $x > 10 { . . . }
```

Ut vides, condiciones sunt negatae versiones alterius. Hoc sensu, `dum` et `usque` sunt in eadem relatione ac `si` et `nisi`.

{% include nav.html %}