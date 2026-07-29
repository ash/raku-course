---
title: 'Решение: Сложение двух аргументов'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Исходный код можно найти в файле [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Вывод

```console
$ raku two-arguments.raku 2 3
5
```

## Комментарии

1. Два позиционных параметра получают два слова из командной строки.

1. Аргументы командной строки поступают как строки, но оператор `+` преобразует их в числа, поэтому `2` и `3` складываются в `5`.

{% include nav.html %}
