---
title: 'Решение: Класс стека'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Вывод

```
3
3
2
```

## Комментарии

1. `@!items` — приватный атрибут: тайгл `!` означает, что он доступен только изнутри класса,
а хранилищу стека именно таким и следует быть.

1. `peek` с помощью `.tail` смотрит на последний элемент, не удаляя его, а `pop` действительно
снимает его, поэтому размер уменьшается с `3` до `2`.

{% include nav.html %}
