---
title: 'Розв''язання: Запасне значення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Вихідний код можна знайти у файлі [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Вивід

```
5
default
```

## Коментарі

1. `get(5)` звичайно повертає `5`, тож `//` його й лишає.

1. `get(0)` повертає невизначений `Failure`, тож `//` вдається до `'default'`. Оскільки `Failure` є невизначеним, `//` обробляє його тихо, не кидаючи винятку.

{% include nav.html %}
