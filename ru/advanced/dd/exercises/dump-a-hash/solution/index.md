---
title: 'Решение: Вывод хеша'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Исходный код можно найти в файле [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Вывод

```
{:alpha(1), :beta(2)}
```

## Комментарии

1. `dd` выводит хеш в виде, похожем на код, где каждая пара представлена как `:ключ(значение)`.

1. Ключи выводятся в отсортированном порядке — `alpha` перед `beta` — хотя `beta` была записана первой.

{% include nav.html %}
