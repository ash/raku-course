---
title: 'Lösung: Treffen Sie eine Wortgruppe'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Du findest den Quellcode in der Datei [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Ausgabe

```
｢love Raku｣
```

## Kommentare

1. Das Leerzeichen zwischen den Wörtern ist hier bedeutsam, die Wortgruppe steht also in Anführungszeichen: `'love Raku'`. Ohne die Anführungszeichen würde die Regex-Maschine das Leerzeichen übergehen und nach `loveRaku` suchen, was in der Zeichenkette nicht vorkommt.

1. Der Smartmatch liefert ein Match-Objekt, das die ganze angeführte Wortgruppe umfasst, und `say` gibt es zwischen Eckklammern aus.

{% include nav.html %}
