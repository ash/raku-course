---
title: 'Решение: Клас стек'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

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

🦋 Намерете програмата във файла [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Изход

```
3
3
2
```

## Коментари

1. `@!items` е частен атрибут — туигилът `!` означава, че до него се стига само отвътре
в класа, а точно такова трябва да бъде хранилището на стека.

1. `peek` използва `.tail`, за да погледне последния елемент, без да го маха, докато
`pop` наистина го взема, така че размерът пада от `3` на `2`.

{% include nav.html %}
