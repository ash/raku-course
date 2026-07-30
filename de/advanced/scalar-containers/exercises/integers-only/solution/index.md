---
title: 'Solution: Nur Ganzzahlen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Du findest den Quellcode in der Datei [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Ausgabe

```
250
(Int)
```

## Kommentare

1. Die Typeinschränkung `Int` in `my Int $cars` lässt den Container jeden Wert ablehnen, der keine Ganzzahl ist. Eine direkte Zuweisung von `250.7` (einem `Rat`) wäre ein Kompilierzeitfehler.

1. Der Aufruf von `.Int` auf dem rationalen Wert `250.7` wandelt ihn in die Ganzzahl `250` um, indem der Nachkommateil entfernt wird. Der umgewandelte Wert passt in den Container. Verwechsle dieses Verhalten nicht mit Rundung.

1. Die Pseudo-Methode `.WHAT` bestätigt, dass der im Container gespeicherte Wert vom Typ `Int` ist.

{% include nav.html %}
