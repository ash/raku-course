---
title: 'Решение: Файл или каталог?'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Исходный код можно найти в файле [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Вывод

```
True
False
```

## Комментарии

1. `.f` проверяет, обычный ли это файл, поэтому для `a.txt` возвращается `True`.

1. `.d` проверяет, каталог ли это. Заданный о том же самом пути, он возвращает `False`, потому
что `a.txt` — файл, а не каталог. Эти две проверки дополняют друг друга, и именно так отличают
файл от каталога.

{% include nav.html %}
