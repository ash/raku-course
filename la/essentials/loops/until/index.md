---
title: 'Utendo `until`'
---

{% include menu.html %}

Constructum `until` contrarium est `while`. Exsequitur codicem donec condicio fit `True` (vel, aliter dicendo, dum est `False`).

Hic est modificatus [programma ex pagina praecedenti](../while) quod utitur `until` et nova condicione:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Intra numerum, qui non est maior quam 10: ';
    say "Intrasti $x.";
}
say "$x est maior quam 10.";
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

## `until` vs. `while`

Compara aequivalentes programmata cum `while` et `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Ut vides, condiciones sunt negatae versiones alterius. Hoc sensu, `while` et `until` sunt in eadem relatione ac `if` et `unless`.

{% include nav.html %}