---
title: 'Решение: Удалите файл'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Исходный код можно найти в файле [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Вывод

```
True
False
```

## Комментарии

1. `spurt` создаёт файл, поэтому первая проверка `.e` сообщает `True`.

1. `unlink` его удаляет. Вторая проверка `.e` сообщает уже `False`, потому что файла больше нет.
Обратите внимание на использование `.e`, а не `.f`: проверка типа `.f` бросила бы исключение
для пути, которого уже не существует, а `.e` просто ответит `False`.

{% include nav.html %}
