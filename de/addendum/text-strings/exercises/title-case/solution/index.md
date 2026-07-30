---
title: 'Lösung: Titelschreibung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Du findest den Quellcode in der Datei [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Ausgabe

```
The Lord Of The Rings
```

## Kommentare

1. `.tc` („title-case“) schreibt den ersten Buchstaben einer Zeichenkette groß. Der
Hyperoperator `>>.tc` wendet es auf alle Wörter zugleich an, und `.join(' ')` setzt den
Satz wieder zusammen.

{% include nav.html %}
