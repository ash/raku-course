---
title: Subprogramma recursivum
translations_gpt:
---

{% include menu.html %}

Subprogramma _recursivum_ est id quod se ipsum vocat. Exemplum classicum est factorialis: factorialis numeri `n` est `n` per factorialem numeri `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Lege corpus ut duos casus operatore ternario `?? !!` iunctos:

* cum `$n` est `1` vel minus, responsum simpliciter `1` est;
* aliter responsum est `$n` per `fact($n - 1)` — idem subprogramma cum numero minore vocatum.

Unaquaeque vocatio unum factorem detrahit et factorialem minorem petit, donec numerus ad `1` perveniat et vocationes se explicent: `fact(5)` est `5 * fact(4)`, quod est `5 * 4 * fact(3)`, et sic deorsum ad `1`.

Recursio multa problemata directissime exprimit. Quotiens munus per minorem versionem sui ipsius describi potest, subprogramma recursivum saepe est modus naturalissimus illud scribendi.

{% include nav.html %}
