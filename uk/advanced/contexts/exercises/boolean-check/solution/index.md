---
title: 'Розв''язання: Булева перевірка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @empty;
say ?@empty;
```

🦋 Вихідний код можна знайти у файлі [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Вивід

```
False
```

## Коментарі

1. Префікс `?` задає булевий контекст.

1. Порожній масив є хибним — саме на це й спирається `if @array`.

{% include nav.html %}
