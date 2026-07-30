---
title: 'Solution: Der native Standardwert'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Du findest den Quellcode in der Datei [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Ausgabe

```
0
[]
```

## Kommentare

1. Eine native `num` kann nicht undefiniert sein, daher beginnt sie wie ein nativer `int` bei `0` statt bei `(Num)`.

1. Ein nativer `str` beginnt als leerer String, weshalb die Klammern ohne Inhalt dazwischen ausgegeben werden. Keiner der nativen Typen enthält jemals einen undefinierten Wert.

1. Die Typangaben sind hier entscheidend. Lässt du sie weg — schreibst also `my $n; my $s;` — werden die Variablen zu gewöhnlichen Containern, die *undefiniert* (`Any`) starten. Dann gibt `say $n` den Wert `(Any)` aus, und die Interpolation des undefinierten `$s` warnt mit *„Use of uninitialized value … in string context"*. Es sind die nativen Typen `num` und `str`, die die Standardwerte `0` und leerer String garantieren.

{% include nav.html %}
