---
title: 'Übung: Gib die Warnung aus'
---

{% include menu.html %}

## Problem

Erstellen Sie ein Programm, das nach Ihrem Alter fragt und eine oder zwei Warnungen ausgibt, wenn der eingegebene Wert negativ ist. Stellen Sie sicher, dass die Warnung an `STDERR` ausgegeben wird.

## Beispiel

Ein paar mögliche Fälle:

```console
$ raku print-the-warning.raku
Wie alt sind Sie? 20
Ihr Alter ist 20

$ raku print-the-warning.raku
Wie alt sind Sie? -1
Sie haben eine negative Zahl eingegeben!
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}