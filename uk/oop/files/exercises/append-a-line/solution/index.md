---
title: 'Розв''язання: Наростіть журнал'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Вихідний код можна знайти у файлі [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Вивід

```
start
entry 1
entry 2
entry 3
```

## Коментарі

1. Перший `spurt` створює файл наново з рядком `start`.

1. Кожен `spurt` усередині циклу використовує `:append`, тож додає свій рядок після наявного вмісту, а не замінює файл. Саме так і росте файл журналу: кожна ітерація (чи кожен запуск програми) причіпляє в кінець ще один рядок.

1. Без `:append` кожен прохід перезаписував би файл, і вцілів би лише останній рядок.

{% include nav.html %}
