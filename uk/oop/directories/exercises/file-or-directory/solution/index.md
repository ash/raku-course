---
title: 'Розв''язання: Файл чи каталог?'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Вихідний код можна знайти у файлі [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Вивід

```
True
False
```

## Коментарі

1. `.f` перевіряє наявність звичайного файлу, тож для `a.txt` повертає `True`.

1. `.d` перевіряє, чи це каталог. Запитаний про той самий шлях, він повертає `False`, бо `a.txt` є файлом, а не каталогом. Ці дві перевірки доповнюють одна одну, — саме так відрізняють файл від каталогу.

{% include nav.html %}
