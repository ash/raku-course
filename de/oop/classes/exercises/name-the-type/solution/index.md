---
title: 'Lösung: Nennen Sie den Typ'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Cat {
}

class Dog {
}

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Du findest den Quellcode in der Datei [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Ausgabe

```
(Cat)
True
False
```

## Kommentare

1. `WHAT` liefert das Typobjekt, in Klammern als `(Cat)` dargestellt — `$felix` ist eine `Cat`.

1. `===` vergleicht zwei Typobjekte auf Identität. `$felix.WHAT === Cat.WHAT` ist `True`, weil Felix tatsächlich eine `Cat` ist, während `$felix.WHAT === Dog.WHAT` `False` ist — eine `Cat` und ein `Dog` sind verschiedene Typen, ihre Typobjekte sind also nicht dasselbe.

{% include nav.html %}
