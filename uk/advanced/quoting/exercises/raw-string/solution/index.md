---
title: 'Розв''язання: Сирий рядок'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say Q{$x and \n};
```

🦋 Вихідний код можна знайти у файлі [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Вивід

```
$x and \n
```

## Коментарі

1. `Q` — найбуквальніша форма цитування: вона нічого не інтерполює й не обробляє жодних екранованих послідовностей.

1. Тож `$x` залишається текстом, а `\n` залишається зворотною косою рискою та літерою `n`.

{% include nav.html %}
