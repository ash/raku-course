---
title: Quiz — Pakete
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`$x` ist mit `my` deklariert, also ist sie lexikalisch und gehört nie zum Namensraum `M`. Der Pfad `$M::x` findet daher nichts — einen undefinierten Wert — und `.defined` ergibt `False`. Nur eine `our`-Variable wäre auf diese Weise erreichbar.

</div>

{% include nav.html %}
