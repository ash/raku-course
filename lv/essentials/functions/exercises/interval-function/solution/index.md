---
title: 'Risinājums: Intervāla funkcija'
---

{% include menu.html %}

Šajā funkcijā tiek izmantota trīs zaru `if` konstrukcija. Pirmie divi zari satur Boolea testu, bet trešais pārbaudījums nav nepieciešams, jo tas ir vienīgais atlikušais variants, ja skaitlis neizturēja nevienu no pirmajiem diviem testiem.

## Kods

Šeit ir risinājums:

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

🦋 Atrodiet programmu failā [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Izvade

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}