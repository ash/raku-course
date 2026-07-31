---
title: 'Solutio: Classis acervi'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Exitus

```
3
3
2
```

## Commentarii

1. `@!items` attributum privatum est — twigil `!` significat illud solum
ex intra classem attingi posse, quod est exacte quod repositorium acervi esse debet.

1. `peek` `.tail` adhibet ut elementum ultimum sine remotione inspiciat, dum `pop`
illud revera aufert, itaque magnitudo a `3` ad `2` cadit.

{% include nav.html %}
