---
title: Розв'язання вправи «Клас стека»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Вивід

```
3
3
2
```

## Коментарі

1. `@!items` є приватним атрибутом — тайгл `!` означає, що дістатися до нього
можна лише зсередини класу, а саме таким і має бути сховище стека.

1. `peek` використовує `.tail`, щоб подивитися на останній елемент, не знімаючи
його, тоді як `pop` справді його забирає, тож розмір падає з `3` до `2`.

{% include nav.html %}
