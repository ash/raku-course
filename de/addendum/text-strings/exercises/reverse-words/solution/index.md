---
title: 'Lösung: Wortreihenfolge umkehren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Du findest den Quellcode in der Datei [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Ausgabe

```
nice really is Raku
```

## Kommentare

1. `.words` zerlegt den Satz in eine Liste, `.reverse` dreht die Reihenfolge der Liste um,
und `.join(' ')` klebt die Wörter mit einzelnen Leerzeichen wieder zusammen.

{% include nav.html %}
