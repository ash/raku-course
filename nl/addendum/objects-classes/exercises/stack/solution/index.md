---
title: 'Oplossing: Een stackklasse'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

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

🦋 Je kunt de broncode vinden in het bestand [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Uitvoer

```
3
3
2
```

## Opmerkingen

1. `@!items` is een private attribuut — de twigil `!` betekent dat het alleen
van binnen de klasse bereikbaar is, en dat is precies wat de opslag van een stack moet zijn.

1. `peek` gebruikt `.tail` om naar het laatste element te kijken zonder het te verwijderen, terwijl `pop`
het er werkelijk af haalt, dus zakt de omvang van `3` naar `2`.

{% include nav.html %}
