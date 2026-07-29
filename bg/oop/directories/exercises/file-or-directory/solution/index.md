---
title: 'Решение: Файл или директория?'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Намерете програмата във файла [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Изход

```
True
False
```

## Коментари

1. `.f` проверява за обикновен файл, така че връща `True` за `a.txt`.

1. `.d` проверява за директория. Зададен за същия този път, той връща `False`, защото `a.txt` е файл, а не директория. Двете проверки се допълват и точно така различавате файл от директория.

{% include nav.html %}
