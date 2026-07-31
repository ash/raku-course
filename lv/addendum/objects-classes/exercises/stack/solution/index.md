---
title: 'Risinājums: Steka klase'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Izvade

```
3
3
2
```

## Komentāri

1. `@!items` ir privāts atribūts — `!` tvigils nozīmē, ka tas sasniedzams tikai
no klases iekšienes, un tieši tādai steka glabātuvei ir jābūt.

1. `peek` ar `.tail` palūkojas uz pēdējo elementu, to neizņemot, kamēr `pop` to
tiešām noņem, tāpēc izmērs nokrīt no `3` uz `2`.

{% include nav.html %}
