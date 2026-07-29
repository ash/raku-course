---
title: 'Розв''язання: Починається з'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Вихідний код можна знайти у файлі [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Вивід

```
True
```

## Коментарі

1. Якір `^` змушує збіг починатися з початку рядка, а `\d` далі вимагає, щоб цей перший символ був цифрою.

1. Без `^` шаблон вдався б і для цифри, що трапляється будь-де далі в рядку, як-от у `'apples 3'`.

{% include nav.html %}
