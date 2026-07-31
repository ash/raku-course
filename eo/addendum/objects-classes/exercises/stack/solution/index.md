---
title: 'Solvo: Klaso por stako'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Eligo

```
3
3
2
```

## Komentoj

1. `@!items` estas privata atributo — la tvigilo `!` signifas, ke ĝi atingeblas nur
el ene de la klaso, kio estas ĝuste tio, kio la konservejo de stako devus esti.

1. `peek` uzas `.tail` por rigardi la lastan elementon sen forpreni ĝin, dum `pop`
efektive forprenas ĝin, do la grando falas de `3` al `2`.

{% include nav.html %}
