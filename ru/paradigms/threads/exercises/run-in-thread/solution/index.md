---
title: 'Решение: Выполните в потоке'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Исходный код можно найти в файле [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Вывод

```
working
```

## Комментарии

1. `Thread.start` выполняет блок в новом потоке.

1. `.finish` ждёт завершения потока, поэтому программа не заканчивается прежде, чем будет
напечатано `working`.

{% include nav.html %}
