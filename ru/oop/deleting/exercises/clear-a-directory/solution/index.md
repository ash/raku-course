---
title: 'Решение: Очистите каталог'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Исходный код можно найти в файле [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Вывод

```
False
```

## Комментарии

1. `rmdir` удаляет только пустой каталог, поэтому сначала должны уйти файлы. `'cache'.IO.dir`
перечисляет записи, а `.unlink for …` удаляет каждую из них.

1. Теперь, когда каталог пуст, `rmdir` его удаляет. Итоговая проверка `.e` сообщает `False`,
подтверждая, что `cache` больше нет.

{% include nav.html %}
