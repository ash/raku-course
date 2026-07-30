---
title: 'Solution: Existiert der Schlüssel'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Du findest den Quellcode in der Datei [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Ausgabe

```
False
```

## Kommentare

1. Das Adverb `:exists` gibt zurück, ob der Schlüssel vorhanden ist, ohne den Wert abzurufen.

1. Der Hash hat keinen Schlüssel `z`, daher wird `False` zurückgegeben -- und im Gegensatz zu einer normalen Abfrage wird der Schlüssel nicht als Nebeneffekt erzeugt.

{% include nav.html %}
