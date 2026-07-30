---
title: 'Lösung: Ein sparsamer Treffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Du findest den Quellcode in der Datei [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Ausgabe

```
｢"hi"｣
```

## Kommentare

1. Das `?` hinter `.+` macht den Quantor sparsam, er trifft also so wenige Zeichen wie möglich.

1. Er hält daher beim ersten schließenden `"` an und fängt nur `"hi"` ein. Ein gieriges `.+` wäre bis zum letzten `"` gelaufen und hätte `"hi" and "bye"` getroffen.

{% include nav.html %}
