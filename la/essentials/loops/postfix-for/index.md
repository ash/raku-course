---
title: 'Postfixa forma de `for`'
---

{% include menu.html %}

Iam vidimus alios modificatores sententiae: [`if` et `else`](/la/essentials/conditional-checks/modifiers) et [`while` et `until`](/la/essentials/loops/modifiers). Et hoc est causa parvae celebrationis, quia consilium Raku valde constans est.

Cum brevi corpore anuli, anulus `for` in forma postfix scribi potest:

```raku
.say for 1..7;
```

Ut vides, intervalla sunt valde naturalia cum forma postfix "pro" utuntur.

Hoc programma aequivalet magis traditae varianti:

```raku
for 1..7 -> $n {
    say $n;
}
```

Vel, si variabilis anuli defalta adhibetur, ad:

```raku
for 1..7 {
    .say;
}
```

Hic, `.say` est forma brevis pro `$_.say`.


{% include nav.html %}