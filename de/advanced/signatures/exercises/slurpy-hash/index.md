---
title: Slurpy benannte Argumente
translations_gpt:
---

{% include menu.html %}

## Problem

Schreiben Sie eine Subroutine `describe`, die einen erforderlichen positionalen Namen entgegennimmt und dann eine beliebige Anzahl benannter Argumente in einem Slurpy-Hash (`*%opts`) sammelt. Sie soll einen String der Form `name: key=value, key=value, ...` zurückgeben, wobei jede Option mit ihren Schlüsseln in alphabetischer Reihenfolge aufgelistet wird.

Rufen Sie sie als `describe('Anna', colour => 'red', size => 5)` auf und geben Sie das Ergebnis aus.

## Beispiel

Das Programm gibt aus:

```
Anna: colour=red, size=5
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
