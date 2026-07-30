---
title: 'Solution: Eine Variable beschreiben'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Du findest den Quellcode in der Datei [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Ausgabe

```
Str
Scalar
$lang
```

## Kommentare

1. `.^name` gibt den Typ des im Container gespeicherten Wertes zurück, der `Str` ist.

1. `.VAR` gibt den zugrunde liegenden Container zurück, und `.^name` darauf gibt `Scalar` zurück — den Typ des Containers selbst.

1. `.VAR.name` gibt den Namen der Variable zurück, `$lang`, einschließlich ihres Sigils. Beachte, dass dies die `name`-Methode ist, nicht die `^name`-Meta-Methode, die in den ersten beiden Zeilen verwendet wird.

{% include nav.html %}
