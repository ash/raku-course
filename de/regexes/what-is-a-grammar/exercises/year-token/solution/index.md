---
title: 'Lösung: Jahr und Monat'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Du findest den Quellcode in der Datei [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Ausgabe

```
｢2025｣
｢06｣
```

## Kommentare

1. Es werden zwei benannte Regexes deklariert, von denen jeder ein Stück des Datums beschreibt: ein vierstelliges `year` und ein zweistelliges `month`.

1. Das Muster verbindet sie mit einem wörtlichen Bindestrich dazwischen, und jedes wird unter seinem eigenen Namen gecapturt. Ein größeres Muster aus kleinen benannten Teilen zu bauen ist genau der Gedanke, den eine Grammatik formalisiert.

{% include nav.html %}
