---
title: 'Розв''язання: Вежа зі степенів'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 2 ** 2 ** 3;
```

🦋 Вихідний код можна знайти у файлі [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Вивід

```
256
```

## Коментарі

1. Оскільки `**` є правоасоціативним, вираз групується як `2 ** (2 ** 3)`.

1. Це `2 ** 8`, тобто `256`, а не `(2 ** 2) ** 3`, що дало б `64`.

{% include nav.html %}
