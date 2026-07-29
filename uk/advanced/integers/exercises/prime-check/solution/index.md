---
title: 'Розв''язання: Просте чи ні'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Вихідний код можна знайти у файлі [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Вивід

```
True
False
```

## Коментарі

1. `97` не має дільників, окрім `1` і самого себе, тож `is-prime` повертає `True`.

1. `91` виглядає простим, але дорівнює `7 × 13`, тож `is-prime` повертає `False`. Метод виконує розкладання на множники за вас — саме заради цього він і потрібен.

{% include nav.html %}
