---
title: 'Solution: Was ist es'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Du findest den Quellcode in der Datei [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Ausgabe

```
True
False
```

## Kommentare

1. `$a.WHAT` ist nicht der String `Int`, sondern das tatsächliche `Int`-Typ-Objekt, sodass `=== Int` es mit dem Typ selbst vergleicht und `True` zurückgibt.

1. `$b` enthält einen String, daher ist sein `WHAT` `Str`; der Vergleich mit `Int` ergibt `False`. Das macht `WHAT` nützlich in Bedingungen, nicht nur in Ausgaben.

{% include nav.html %}
