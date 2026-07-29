---
title: 'Решение: Вывод без перевода строки'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
$*OUT.print('a');
$*OUT.print('b');
$*OUT.say('c');
```

🦋 Исходный код можно найти в файле [print-without-newline.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/print-without-newline.raku).

## Вывод

```
abc
```

## Комментарии

1. `$*OUT.print` пишет свой текст, не добавляя перевода строки, поэтому `a` и `b` остаются
на одной строке.

1. `$*OUT.say` пишет `c`, а затем перевод строки, завершая строку `abc`.

{% include nav.html %}
