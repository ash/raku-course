---
title: Closures
translations_gpt:
---

{% include menu.html %}

Eine _Closure_ ist eine Subroutine, die Variablen aus dem Bereich einfängt, in dem sie definiert wurde, und sie am Leben hält, selbst nachdem dieser Bereich geendet hat. Damit erhält die Subroutine ihren eigenen, dauerhaften Zustand.

Das klassische Beispiel ist ein Zähler:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

Die Variable `$n` ist innerhalb von `make-counter` deklariert. Die zurückgegebene Subroutine verweist auf `$n` und schließt sich also um sie: Jeder Aufruf von `count` erhöht und liefert **dieselbe** `$n`, obwohl `make-counter` selbst längst fertig ist.

Jeder Aufruf von `make-counter` erzeugt eine frische `$n`, getrennte Zähler sind also unabhängig:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Closures erlauben es einer Funktion, Zustand mitzutragen, ohne globale Variable und ohne Objekt. Sie sind die funktionale Art, sich zwischen Aufrufen etwas zu merken.

{% include nav.html %}
