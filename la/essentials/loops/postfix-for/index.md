---
title: 'Forma Postfix "pro"'
---

{% include menu.html %}

Iam vidimus alios modificatores sententiae: [`si` et `aliter`](/la/essentials/conditional-checks/modifiers) et [`dum` et `donec`](/la/essentials/loops/modifiers). Et hoc est causa parvae celebrationis, quia consilium Raku valde constans est.

Cum brevi corpore anuli, anulus `pro` in forma postfix scribi potest:

```raku
.say pro 1..7;
```

Ut vides, intervalla sunt valde naturalia cum forma postfix "pro" utuntur.

Hoc programma aequivalet magis traditae varianti:

```raku
pro 1..7 -> $n {
    dic $n;
}
```

Vel, si variabilis anuli defalta adhibetur, ad:

```raku
pro 1..7 {
    .dic;
}
```

Hic, `.dic` est forma brevis pro `$_.dic`.


{% include nav.html %}