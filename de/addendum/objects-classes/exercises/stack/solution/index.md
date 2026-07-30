---
title: 'Lösung: Eine Stapelklasse'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Stack {
    has @!items;

    method push($x) { @!items.push($x) }
    method pop      { @!items.pop }
    method peek     { @!items.tail }
    method size     { @!items.elems }
}

my $stack = Stack.new;
$stack.push($_) for 1, 2, 3;

say $stack.peek;
say $stack.pop;
say $stack.size;
```

🦋 Du findest den Quellcode in der Datei [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Ausgabe

```
3
3
2
```

## Kommentare

1. `@!items` ist ein privates Attribut — der Twigil `!` bedeutet, dass es nur von innerhalb
der Klasse erreichbar ist, und genau das sollte der Speicher eines Stapels sein.

1. `peek` verwendet `.tail`, um das letzte Element anzusehen, ohne es zu entfernen,
während `pop` es tatsächlich herunternimmt, die Größe fällt also von `3` auf `2`.

{% include nav.html %}
