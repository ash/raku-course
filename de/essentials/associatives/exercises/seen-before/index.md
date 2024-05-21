---
title: 'Übung: Schon gesehen?'
---

{% include menu.html %}

## Problem

Erstellen Sie ein Programm, das eine Schleife mit den folgenden Aktionen startet:

1. Fordern Sie zur Eingabe eines Wortes auf.
2. Wenn das Wort schon einmal gesehen wurde, drucken Sie `Gesehen!`.
3. Wenn das Wort mehr als einmal gesehen wurde, drucken Sie `Schon 2 Mal gesehen!`, usw.
3. Wiederholen Sie die Schleife.

## Beispiel

Ein Beispiel für die Interaktion mit dem Programm:

```console
$ raku seen-before.raku
Wort: Ich
Wort: habe
Wort: noch
Wort: nie
Wort: gesehen
Wort: gesehen
Gesehen!
Wort: das
Wort: gesehen
Schon 2 Mal gesehen!
Wahr
Wort: als
Wort: das
Gesehen!
Wort: gesehen
Schon 3 Mal gesehen!
Wahr
Wort: gesägt
Wort: ^C
```

Um das Programm zu stoppen, drücken Sie `Strg+C`.

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}