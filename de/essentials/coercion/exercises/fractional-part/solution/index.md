---
title: 'Solution: Bruchteile'
---

{% include menu.html %}

Um den Bruchteil einer Zahl zu erhalten, können Sie den ganzzahligen Teil subtrahieren, den Sie durch das Umwandeln der Zahl in einen `Int` erhalten können.

## Code

Die mögliche Lösung ist unten dargestellt:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Finden Sie das Programm in der Datei [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Ausgabe

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Kommentar

Versuchen Sie dasselbe Programm auch mit negativen Zahlen, zum Beispiel:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

In diesem Fall sollte das Ergebnis ebenfalls korrekt sein:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}