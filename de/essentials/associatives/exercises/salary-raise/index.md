---
title: 'Übung: Gehaltserhöhung'
---

{% include menu.html %}

## Problem

Gegeben ist ein Hash mit den Daten eines Mitarbeiters:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Erhöhe das Gehalt um 5&thinsp;% und gib es zusammen mit dem Namen des Mitarbeiters aus. Stelle sicher, dass der `%employee` Hash nach der Erhöhung korrekte Werte enthält.

## Beispiel

Hier ist die erwartete Ausgabe des Programms:

```console
$ raku salary-raise.raku
Neues Gehalt von Eliza Vents: 3150
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}