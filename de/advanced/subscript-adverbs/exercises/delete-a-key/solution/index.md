---
title: 'Solution: Einen Schlüssel löschen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Du findest den Quellcode in der Datei [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Ausgabe

```
2
```

## Kommentare

1. Das Adverb `:delete` entfernt den Eintrag aus dem Hash (hier ignorieren wir den zurückgegebenen Wert).

1. Der Hash hatte zunächst drei Einträge und hat jetzt `2`, was bestätigt, dass einer entfernt wurde. Das Zählen mit `.elems` hält die Ausgabe vorhersagbar, ohne von der Reihenfolge der Schlüssel abzuhängen.

{% include nav.html %}
