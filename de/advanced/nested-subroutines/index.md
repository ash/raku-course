---
title: Verschachtelte Unterprogramme
translations_gpt:
---

{% include menu.html %}

Eine Unterroutine kann _innerhalb_ einer anderen Unterroutine definiert werden. Eine verschachtelte Unterroutine ist eine normale Unterroutine, aber sie ist nur innerhalb der Unterroutine sichtbar, die sie enthält.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

Das Programm gibt aus:

```
I am the inner subroutine
```

Hier wird `inner` innerhalb von `outer` deklariert, und `outer` ruft sie auf. Das funktioniert, weil `inner` im gesamten Körper von `outer` im Gültigkeitsbereich liegt.

Außerhalb von `outer` existiert der Name `inner` jedoch nicht. Das folgende Programm lässt sich nicht kompilieren:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Verschachtelung ist nützlich, wenn eine Hilfsroutine nur von einer einzigen Unterroutine benötigt wird. Sie darin zu belassen, macht deutlich, dass es sich um ein privates Detail handelt, und verhindert, dass sie versehentlich von anderswo aufgerufen wird.

{% include nav.html %}
