---
title: 'Lösung: Eine Rule mit Leerzeichen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Du findest den Quellcode in der Datei [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Ausgabe

```
True
```

## Kommentare

1. Weil `TOP` eine `rule` ist, verlangt jedes zwischen den `<word>`-Aufrufen geschriebene Leerzeichen Leerraum in der Eingabe.

1. Die Zeichenkette `'the quick fox'` hat Leerzeichen zwischen allen drei Wörtern, sie wird also zerlegt. Mit einem `token` für `TOP` würden die Leerzeichen im Muster übergangen und das Zerlegen scheitern.

{% include nav.html %}
