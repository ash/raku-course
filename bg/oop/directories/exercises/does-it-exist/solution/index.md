---
title: 'Решение: Съществува ли?'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Намерете програмата във файла [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Изход

```
False
True
```

## Коментари

1. `.e` проверява дали пътят съществува. Първата проверка се изпълнява, преди файлът да бъде създаден, така че връща `False`.

1. `spurt` след това създава `test.txt` и втората проверка върху *същия* път вече връща `True`. Повторното запитване към обекта-път отразява текущото състояние на файловата система.

{% include nav.html %}
