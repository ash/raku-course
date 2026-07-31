---
title: '`if` sectiones'
---

{% include menu.html %}

`Si` conditionalis condicio probat et si `True` est, codicem exsequi.

```raku
if 10 > 4 {
    say 'Mathematica operatur!';
}
```

Nota quod non opus est conditionem in parenthesibus ponere (sed potes si vis).

Scilicet, variabiles in probationibus gratissime accipiuntur:

```raku
my $vexillum = False;
if $vexillum {
    # . . . aliquid fac
}
```

In casu ubi plus quam una probatio eadem variabile utitur, fieri potest ut comparationes concatenatae utantur:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Responsum rectum $x datum est.";
}
```

Si condicio non impletur, codicis pars associata non exsequitur, et cursus programmatis continuatur.

```raku
say 'Incipe';
if False {
    say 'Hoc numquam imprimetur.';
}
say 'Finis';
```

Hoc programma solum `Incipe` et `Finis` imprimit.;

{% include nav.html %}