---
title: Conditional checks with if
---

{% include menu.html %}

`Si` conditionalis condicio probat et si `Verum` est, codicem exsequi.

```raku
si 10 > 4 {
    dic 'Mathematica operatur!';
}
```

Nota quod non opus est conditionem in parenthesibus ponere (sed potes si vis).

Scilicet, variabiles in probationibus gratissime accipiuntur:

```raku
meum $vexillum = Falsum;
si $vexillum {
    # . . . aliquid fac
}
```

In casu ubi plus quam una probatio eadem variabile utitur, fieri potest ut comparationes concatenatae utantur:

```raku
meum $x = 42;
si 40 < $x < 45 {
    dic "Responsum rectum $x datum est.";
}
```

Si condicio non impletur, codicis pars associata non exsequitur, et cursus programmatis continuatur.

```raku
dic 'Incipe';
si Falsum {
    dic 'Hoc numquam imprimetur.';
}
dic 'Finis';
```

Hoc programma solum `Incipe` et `Finis` imprimit.;

{% include nav.html %}