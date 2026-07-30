---
title: 'Solution: Ein Quadrierungsoperator'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Du findest den Quellcode in der Datei [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Ausgabe

```
25
```

## Kommentare

1. Der Operator wird als `postfix:<²>` deklariert, sodass sein Symbol — das hochgestellte Zwei-Zeichen — nach seinem Operanden geschrieben wird, wie in `5²`.

1. Der Rumpf potenziert den Operanden mit zwei, sodass `5²` zu `25` ausgewertet wird. Nichts hindert dich daran, ein Unicode-Symbol zu verwenden, das die mathematische Notation widerspiegelt.

{% include nav.html %}
