---
title: 'Solution: Werte vergleichen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Du findest den Quellcode in der Datei [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Ausgabe

```
ok 1 - uppercase
1..1
```

## Kommentare

1. `is` vergleicht den tatsächlichen Wert `'a'.uc` mit dem erwarteten `'A'`.

1. Sie stimmen überein, also wird der Test bestanden; bei einem Fehlschlag würde `is` beide Werte ausgeben.

{% include nav.html %}
