---
title: Variabiles locales
---

{% include menu.html %}

Quid si variabilem non solum in ambitu globali, sed etiam localiter in clausula declaras?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

Programma nunc duas variabiles independentes habet. Nomen communicant, sed omnes relationes ad `$x` in ambitu globali sunt de variabili globali, dum `$x` intra clausulam est variabile locale, diversum a `$x` globali. Programma duas valores diversas imprimit:

```console
$ raku t.raku
42
1
```

{% include nav.html %}