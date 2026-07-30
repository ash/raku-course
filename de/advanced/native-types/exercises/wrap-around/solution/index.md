---
title: 'Solution: Überlauf'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Du findest den Quellcode in der Datei [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Ausgabe

```
4
255
```

## Kommentare

1. Ein `uint8` reicht von `0` bis `255`, das sind 256 verschiedene Werte. Arithmetik damit wird effektiv modulo 256 durchgeführt.

1. `250 + 10` wäre `260`, was nicht hineinpasst. Es gibt einen Umlauf und landet bei `260 - 256 = 4` oberhalb des unteren Endes. Der Überlauf ist also nicht darauf beschränkt, das obere Ende um Eins zu überschreiten — jedes Ergebnis außerhalb des Bereichs wird zurückgefaltet.

1. In die andere Richtung gibt es ebenfalls einen Überlauf: Das Dekrementieren von `0` kann bei einem vorzeichenlosen Typ nicht `-1` ergeben, also springt es zum Maximum, `255`.

{% include nav.html %}
