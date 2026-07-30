---
title: 'Solution: Verdreifachen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Den Quellcode finden Sie in der Datei [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Ausgabe

```
21
```

## Kommentare

1. Der Pointy Block verwendet `$factor`, eine Variable aus dem umgebenden Gültigkeitsbereich, obwohl er nur einen Parameter `$x` hat. Das Erfassen solcher Variablen macht ihn zu einer Closure.

1. Mit `$factor` gleich `3` ergibt der Aufruf `$scale(7)` den Wert `21`. Ändert man `$factor`, würde derselbe Block mit dem neuen Wert skalieren:

```raku
$factor = 5;
say $scale(7); # 35
```

Da die Closure die *Variable* erfasst und nicht ihren Wert zum Zeitpunkt der Erstellung, sieht der spätere Aufruf das aktualisierte `$factor` und gibt `35` zurück.

{% include nav.html %}
