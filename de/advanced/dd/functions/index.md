---
title: Funktionssignaturen dumpen
---

{% include menu.html %}

Ein nacktes `dd` — ohne Argumente innerhalb einer Subroutine aufgerufen — gibt die Signatur dieser Subroutine aus: ihren Namen und die Liste der Parameter, falls vorhanden. Betrachte das folgende Beispiel mit zwei Subroutinen:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

Das Programm gibt die Signaturen statt irgendwelcher Werte aus:

```console
sub f1()
sub f2($x)
```

Das ist besonders nützlich bei Multi-Funktionen, wo es dir verrät, welcher Kandidat tatsächlich aufgerufen wurde:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

Die Ausgabe benennt jedes Mal die passende Variante:

```console
sub g()
sub g($x)
```

{% include nav.html %}
