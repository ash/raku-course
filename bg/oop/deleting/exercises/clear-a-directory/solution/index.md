---
title: 'Решение: Изчистете директория'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Намерете програмата във файла [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Изход

```
False
```

## Коментари

1. `rmdir` премахва само празна директория, така че файловете трябва да си отидат първи. `'cache'.IO.dir` изброява елементите, а `.unlink for …` изтрива всеки от тях.

1. Директорията вече е празна и `rmdir` я премахва. Последната проверка `.e` съобщава `False`, потвърждавайки, че `cache` го няма.

{% include nav.html %}
