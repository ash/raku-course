---
title: Typisiert oder untypisiert
---

{% include menu.html %}

## Aufgabe

Deklariere zwei skalare Variablen nebeneinander: eine untypisierte `$untyped` und eine `Int`-typisierte `$typed`. Gib beide mit `dd` aus, solange sie noch leer sind, weise dann beiden `42` zu und gib beide erneut mit `dd` aus. Achte genau darauf, wie `dd` die beiden Container unterschiedlich beschreibt.

## Beispiel

Das Programm gibt aus (auf die Standardfehlerausgabe):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
