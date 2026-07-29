---
title: 'Розв''язання: Видаліть файл'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Вихідний код можна знайти у файлі [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Вивід

```
True
False
```

## Коментарі

1. `spurt` створює файл, тож перша перевірка `.e` повідомляє `True`.

1. `unlink` його видаляє. Тоді друга перевірка `.e` повідомляє `False`, бо файлу немає. Зверніть увагу на використання `.e`, а не `.f`: перевірка типу `.f` кинула б виняток для шляху, якого більше не існує, тоді як `.e` просто відповідає `False`.

{% include nav.html %}
