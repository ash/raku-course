---
title: 'Решение: Сырая строка'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
say Q{$x and \n};
```

🦋 Исходный код можно найти в файле [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Вывод

```
$x and \n
```

## Комментарии

1. `Q` — самая буквальная форма цитирования: она ничего не интерполирует и не обрабатывает никаких управляющих последовательностей.

1. Поэтому `$x` остаётся текстом, а `\n` остаётся обратной косой чертой и буквой `n`.

{% include nav.html %}
