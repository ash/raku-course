---
title: 'Lösung: Ein Ersatzwert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Du findest den Quellcode in der Datei [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Ausgabe

```
5
default
```

## Kommentare

1. `get(5)` liefert ganz normal `5`, `//` behält diesen Wert also.

1. `get(0)` liefert ein undefiniertes `Failure`, `//` weicht also auf `'default'` aus. Weil ein `Failure` undefiniert ist, behandelt `//` es still, ohne zu werfen.

{% include nav.html %}
