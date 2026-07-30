---
title: 'Lösung: Ein Buch'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Du findest den Quellcode in der Datei [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Ausgabe

```
Raku by Larry
```

## Kommentare

1. Sowohl `has $.title` als auch `has $.author` deklariert ein Attribut samt einem Lese-Accessor.

1. Beide Accessoren werden innerhalb einer Zeichenkette mit doppelten Anführungszeichen verwendet. Jeder steht in geschweiften Klammern — `{$b.title}` und `{$b.author}` —, das ist die Form der Code-Interpolation: Was in den Klammern steht, wird ausgeführt und sein Ergebnis eingesetzt, die Accessoren werden also aufgerufen und ihre Werte in die Zeichenkette gestellt.

1. Beide Attribute sind Zeichenketten, es ist also sinnvoll, sie auch so zu deklarieren.

{% include nav.html %}
