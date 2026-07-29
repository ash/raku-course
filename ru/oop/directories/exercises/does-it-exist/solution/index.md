---
title: 'Решение: Существует ли?'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Исходный код можно найти в файле [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Вывод

```
False
True
```

## Комментарии

1. `.e` проверяет, существует ли путь. Первая проверка выполняется до создания файла, поэтому
возвращается `False`.

1. Затем `spurt` создаёт `test.txt`, и вторая проверка того же самого пути возвращает уже `True`.
Повторный вопрос объекту пути отражает текущее состояние файловой системы.

{% include nav.html %}
