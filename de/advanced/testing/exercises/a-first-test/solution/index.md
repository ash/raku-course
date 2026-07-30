---
title: 'Solution: Ein erster Test'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Du findest den Quellcode in der Datei [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Ausgabe

```
ok 1 - Raku has four letters
1..1
```

## Kommentare

1. `ok` wird bestanden, weil die Bedingung `'Raku'.chars == 4` wahr ist.

1. `done-testing` gibt die Planzeile `1..1` aus, die angibt, dass ein Test ausgeführt wurde.

{% include nav.html %}
