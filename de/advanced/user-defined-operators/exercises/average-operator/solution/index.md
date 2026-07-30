---
title: 'Solution: Durchschnittsoperator'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Du findest den Quellcode in der Datei [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Ausgabe

```
7
```

## Kommentare

1. Der Operator wird als `infix:<avg>` deklariert, sodass er zwischen seinen zwei Operanden geschrieben wird, genau wie `+` oder `~`.

1. Der Rumpf addiert die zwei Operanden und teilt durch zwei. Für `4` und `10` ist das Ergebnis `7`.

{% include nav.html %}
