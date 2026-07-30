---
title: 'Lösung: Ein Multiplikator'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Du findest den Quellcode in der Datei [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Ausgabe

```
12
```

## Kommentare

1. Der zurückgegebene Pointy Block schließt sich um `$factor` und merkt sich, dass er `3` ist.

1. Ihn mit `4` aufzurufen ergibt `12`.

{% include nav.html %}
