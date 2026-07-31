---
title: 'Soluzione: Una classe pila'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Output

```
3
3
2
```

## Commenti

1. `@!items` è un attributo privato — il twigil `!` significa che è raggiungibile solo da
dentro la classe, che è esattamente ciò che dovrebbe essere il magazzino di una pila.

1. `peek` usa `.tail` per guardare l'ultimo elemento senza rimuoverlo, mentre `pop` lo
toglie davvero, quindi la dimensione scende da `3` a `2`.

{% include nav.html %}
