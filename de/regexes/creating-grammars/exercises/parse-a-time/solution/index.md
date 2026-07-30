---
title: 'Lösung: Zerlegen Sie eine Uhrzeit'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Du findest den Quellcode in der Datei [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Ausgabe

```
｢45｣
```

## Kommentare

1. `TOP` beschreibt die ganze Uhrzeit als drei durch Doppelpunkte getrennte Tokens. Jeder Teil ist `\d ** 2` — genau zwei Ziffern — statt eines offenen `\d+`, sodass ein fehlerhafter Wert wie `09:30:456` abgelehnt wird. (Darf ein Teil ohne führende Null stehen, etwa die Stunde in `9:30:45`, schreiben Sie `\d ** 1..2`, um eine oder zwei Ziffern zuzulassen.)

1. Nach dem Zerlegen ist jedes Token ein benanntes Capture, die Sekunde wird also als `<second>` vom Treffer gelesen. Einen dritten Teil hinzuzufügen heißt nur, ein Token und einen Doppelpunkt mehr zu schreiben — die Grammatik wächst von selbst mit.

{% include nav.html %}
