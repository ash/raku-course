---
title: 'Решение: Присоединитесь и дождитесь'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Исходный код можно найти в файле [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Вывод

```
first
second
```

## Комментарии

1. `.finish` блокирует выполнение, пока поток не напечатает `first`.

1. Только после этого основная программа продолжается и печатает `second`, поэтому порядок
гарантирован. Без `.finish` эти строки могли бы появиться в любом порядке.

{% include nav.html %}
