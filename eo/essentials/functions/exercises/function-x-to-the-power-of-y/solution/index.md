---
title: 'Solvo: Funkcio por kalkuli xʸ'
---

{% include menu.html %}

En ĉi tiu programo, uzu la operatoron `**` por kalkuli la potencon.

## Kodo

Jen la solvo:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Trovu la programon en la dosiero [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Eligo

Rulu la programon por konfirmi ke ĝi presas ĝustajn respondojn:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Komento

Ĉi tiu funkcio ankaŭ funkcias kun negativaj potencoj, ekzemple:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}