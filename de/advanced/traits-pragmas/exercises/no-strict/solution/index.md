---
title: 'Solution: strict lockern'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Den Quellcode finden Sie in der Datei [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Ausgabe

```
30
```

## Kommentare

1. `no strict` schaltet die Anforderung ab, dass Variablen deklariert werden müssen, sodass `$a` und `$b` ohne ein `my` zugewiesen werden können. Unter dem standardmäßigen `strict` wäre jede dieser Zeilen ein Kompilierzeitfehler.

1. Nach der Zuweisung verhalten sich die Variablen normal, sodass `$a + $b` gleich `30` ist. Die Lockerung ist lexikalisch — sie dauert nur bis zum Ende des Gültigkeitsbereichs, in dem `no strict` erscheint.

1. Dies ist eine Demonstration, keine empfohlene Praxis: `strict` ist aus gutem Grund standardmäßig aktiviert — es erkennt Tippfehler in Variablennamen zur Kompilierzeit. Behalten Sie es in echtem Code bei und deklarieren Sie Ihre Variablen mit `my`.

{% include nav.html %}
