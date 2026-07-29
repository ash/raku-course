---
title: 'Решение: Составьте журнал'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Исходный код можно найти в файле [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Вывод

```
start
entry 1
entry 2
entry 3
```

## Комментарии

1. Первый `spurt` создаёт файл заново со строкой `start`.

1. Каждый `spurt` внутри цикла использует `:append`, поэтому добавляет свою строку после уже
имеющегося содержимого, а не заменяет файл. Именно так растёт файл журнала: каждая итерация
(или каждый запуск программы) приписывает в конец ещё одну строку.

1. Без `:append` каждый проход перезаписывал бы файл, и уцелела бы только последняя строка.

{% include nav.html %}
