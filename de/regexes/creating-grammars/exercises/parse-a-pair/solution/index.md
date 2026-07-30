---
title: 'Lösung: Zerlegen Sie einen vollständigen Namen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Du findest den Quellcode in der Datei [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Ausgabe

```
｢Hopper｣
```

## Kommentare

1. `TOP` beschreibt den ganzen Namen; `first` und `last` beschreiben seine Teile, mit einem wörtlichen Leerzeichen dazwischen.

1. Nach dem Zerlegen ist jedes Token ein benanntes Capture, der Nachname wird also als `<last>` vom Match-Objekt gelesen.

{% include nav.html %}
