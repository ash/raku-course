---
title: 'Решение: Первый тест'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Исходный код можно найти в файле [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Вывод

```
ok 1 - Raku has four letters
1..1
```

## Комментарии

1. `ok` проходит, потому что условие `'Raku'.chars == 4` истинно.

1. `done-testing` генерирует строку плана `1..1`, указывающую, что был выполнен один тест.

{% include nav.html %}
