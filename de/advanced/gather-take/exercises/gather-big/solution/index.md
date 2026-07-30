---
title: 'Solution: Sammeln bis voll'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Du findest den Quellcode in der Datei [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Ausgabe

```
[1 2 3 4]
```

## Kommentare

1. Die Schleife bekommt einen Bereich von hundert Zahlen, weit mehr als sie verwenden wird. Das ist kein Problem, weil die Schleife sich selbst stoppt: Sobald `$sum` den Wert `10` überschreitet, bricht `last` ab und die verbleibenden Zahlen werden nie besucht.

1. Die Reihenfolge innerhalb des Blocks ist wichtig. Wir addieren zuerst zu `$sum` und prüfen das Limit, bevor wir nehmen, sodass die Zahl, die die Summe über `10` kippt (hier `5`), nicht gesammelt wird. Die laufende Summe erreicht genau `10` nach `4`, sodass die gesammelte Liste `1, 2, 3, 4` ist.

1. Dieses vorzeitige Beenden mit `for` ist das, was `gather`/`take` kann und `grep` nicht: `grep` durchsucht immer die gesamte Liste, während wir hier selbst entscheiden, wann wir aufhören.

{% include nav.html %}
