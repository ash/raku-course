---
title: 'Solution: Ampeln'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Du findest den Quellcode in der Datei [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Ausgabe

```
red is 0
amber is 1
green is 2
```

## Kommentare

1. `my Light $current` ist eine gewöhnliche, veränderbare Variable — nur auf den Typ `Light` eingeschränkt. Durch das Zuweisen der nächsten Konstante wird die Ampel weitergeschaltet, und die Zahl folgt jedes Mal dem Namen: `0`, `1`, `2`.

1. `$current++` sieht so aus, als sollte es von selbst zur nächsten Farbe wechseln, aber es schlägt mit einem Typprüfungsfehler fehl. `++` behandelt die Konstante als einfache Zahl und gibt einen `Int` zurück (`red` wird zu `1`), und ein `Int` passt nicht mehr zum Typ `Light`. Deshalb wechselst du die Ampel, indem du die nächste Konstante zuweist, wie oben gezeigt.

1. Die Typbeschränkung gilt für jede Zuweisung, nicht nur für die erste. `$current` akzeptiert `red`, `amber` oder `green`, aber die Zuweisung von etwas, das kein `Light` ist — eine bloße Zahl oder ein String — wäre ein Typprüfungsfehler.

{% include nav.html %}
