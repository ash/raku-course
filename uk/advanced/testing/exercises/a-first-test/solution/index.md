---
title: 'Розв''язання: Перший тест'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Вихідний код можна знайти у файлі [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Вивід

```
ok 1 - Raku has four letters
1..1
```

## Коментарі

1. `ok` проходить, бо умова `'Raku'.chars == 4` істинна.

1. `done-testing` видає рядок плану `1..1`, який каже, що виконався один тест.

{% include nav.html %}
