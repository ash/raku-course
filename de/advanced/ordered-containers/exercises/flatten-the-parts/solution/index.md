---
title: 'Solution: Die Teile flach machen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @first = 1, 2;
my @second = 3, 4, 5;

my @all = flat(@first, @second);
say @all;
say @all.elems;
```

🦋 Du findest den Quellcode in der Datei [flatten-the-parts.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/flatten-the-parts.raku).

## Ausgabe

```
[1 2 3 4 5]
5
```

## Kommentare

1. `my @all = @first, @second` zu schreiben würde _kein_ flaches Array ergeben — es würde ein verschachteltes Array aus zwei Arrays erstellen, `[[1 2] [3 4 5]]`.

1. Die Routine `flat` verschmilzt die Elemente beider Arrays zu einer einzigen flachen Sequenz, die dann in `@all` gespeichert wird. Das Ergebnis hat fünf Elemente.

{% include nav.html %}
