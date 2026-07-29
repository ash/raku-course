---
title: 'Решение: Перевернуть и прокричать'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
say 'raku'.flip.uc;
```

🦋 Исходный код можно найти в файле [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Вывод

```
UKAR
```

## Комментарии

1. Методы применяются слева направо: `flip` сначала переворачивает `'raku'` в `'ukar'`, а затем `uc` переводит результат в верхний регистр: `'UKAR'`.

1. Поскольку каждый метод возвращает новую строку, их можно объединять в цепочку в одном выражении.

{% include nav.html %}
