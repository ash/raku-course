---
title: 'Lösung: Bauen Sie einen Multiplikator'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Du findest den Quellcode in der Datei [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Ausgabe

```
14
21
```

## Kommentare

1. `multiplier(2)` liefert eine Subroutine, die sich merkt, dass `$n` gleich `2` ist; `multiplier(3)` liefert eine eigene Subroutine, die sich `3` merkt.

1. Jede zurückgegebene Subroutine behält ihr eigenes `$n`, `double(7)` ergibt also `14` und `triple(7)` ergibt `21` — zwei unabhängige Funktionen aus derselben Fabrik.

{% include nav.html %}
