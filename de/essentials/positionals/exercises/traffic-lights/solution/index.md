---
title: 'Solution: Ampeln'
---

{% include menu.html %}

Die Idee der Lösung besteht darin, das Indexieren des Arrays mit den vier Zuständen der Ampeln zu „schleifen“:

```raku
my @lights = <gelb rot gelb grün>;
```

Während der ersten Sekunden kann die Anzahl der Sekunden seit dem Start direkt als Index im Array verwendet werden. Wenn sie 3 überschreitet, kann man sie mit dem Modulo-Operator `%` wieder an den Anfang des Arrays schleifen. Die Länge des Arrays ist `@lights.elems`, aber wenn es als Operand von `%` verwendet wird, muss die `elems`-Methode nicht aufgerufen werden, da der Name des Arrays in eine Zahl umgewandelt wird, und diese Umwandlung ist so konzipiert, dass sie die Anzahl der Elemente zurückgibt.

## Code

Hier ist die Lösung:

```raku
my @lights = <gelb rot gelb grün>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Finde das Programm in der Datei [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Ausgabe

Führen Sie das Programm aus. Versuchen Sie außerdem, andere Werte im Programm zu verwenden.

```console
$ raku exercises/positionals/traffic-lights.raku
grün
gelb
rot
```

{% include nav.html %}