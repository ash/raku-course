---
title: 'Решение: Книга'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Исходный код можно найти в файле [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Вывод

```
Raku by Larry
```

## Комментарии

1. Каждое объявление, `has $.title` и `has $.author`, создаёт атрибут вместе с аксессором
для чтения.

1. Оба аксессора используются внутри одной строки в двойных кавычках. Каждый заключён
в фигурные скобки — `{$b.title}` и `{$b.author}`, — а это форма интерполяции кода: то, что
стоит в скобках, выполняется, и его результат подставляется в строку. Таким образом аксессоры
вызываются, а их значения попадают в строку.

1. Оба атрибута — строки, поэтому разумно так их и объявить.

{% include nav.html %}
