---
title: 'Розв''язання: Порахуйте рядки'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Вихідний код можна знайти у файлі [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Вивід

```
4
```

## Коментарі

1. `.IO.lines` повертає рядки файлу у вигляді списку.

1. `.elems` їх рахує, даючи `4`.

{% include nav.html %}
