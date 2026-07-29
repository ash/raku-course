---
title: 'Розв''язання: Порівняйте значення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Вихідний код можна знайти у файлі [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Вивід

```
ok 1 - uppercase
1..1
```

## Коментарі

1. `is` порівнює фактичне значення `'a'.uc` з очікуваним `'A'`.

1. Вони збігаються, тож тест проходить; у разі невдачі `is` вивів би обидва значення.

{% include nav.html %}
