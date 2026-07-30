---
title: Die Themenvariable
---

{% include menu.html %}

## Aufgabe

`$_` ist die *Topic*-Variable. Eine `for`-Schleife setzt sie der Reihe nach auf jedes Element, und ein Methodenaufruf mit einem führenden Punkt ohne Invokanten — wie `.chars` — wirkt auf sie, sodass `.chars` dasselbe bedeutet wie `$_.chars`.

Iteriere über die drei Zeichenketten `'apple'`, `'fig'` und `'cherry'`. Gib für jede eine Zeile im Format `<word> has <n> letters` aus, wobei du das Topic `$_` für das Wort und einen Aufruf mit führendem Punkt `.chars` für die Länge verwendest. Beobachte, wie `$_` nacheinander jede Zeichenkette annimmt.

## Beispiel

Das Programm gibt aus:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
