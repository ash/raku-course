---
title: 'Решение: Типизированный MAIN'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Исходный код можно найти в файле [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Вывод

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Комментарии

1. Ограничение `Int` означает, что слово из командной строки должно выглядеть как целое число. При передаче `5` оно привязывается к `$n`, и тело выводит `10`.

1. При передаче `abc` значение не может стать `Int`, поэтому сигнатура не совпадает. Raku не выполняет тело подпрограммы, а выводит сгенерированное сообщение об использовании, обеспечивая валидацию аргументов без каких-либо ручных проверок.

{% include nav.html %}
