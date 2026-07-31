---
title: 'Solvo: Intervala funkcio'
---

{% include menu.html %}

En ĉi tiu funkcio, estas uzata tri-branĉa `if` konstruaĵo. La unuaj du branĉoj havas Boole-an teston, sed la tria kontrolo ne estas bezonata ĉar ĝi estas la sola restanta opcio se la nombro ne pasis iun el la unuaj du testoj.

## Kodo

Jen la solvo:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Trovu la programon en la dosiero [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/interval-function.raku).

## Eligo

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}