---
title: 'Lösung: Zweimal anwenden'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Du findest den Quellcode in der Datei [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Ausgabe

```
18
```

## Kommentare

1. Der Parameter `&f` erhält eine Subroutine; das innere `f($x)` wird in das äußere `f(...)` gegeben.

1. `2` zu verdreifachen ergibt `6`, und nochmals verdreifacht ergibt `18`.

{% include nav.html %}
