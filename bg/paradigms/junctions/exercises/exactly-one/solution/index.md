---
title: 'Решение: Точно едно'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say so one(1, 2, 3) == 2;
```

🦋 Намерете програмата във файла [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Изход

```
True
```

## Коментари

1. Съединението `one` е истина само когато на сравнението отговаря **точно една** стойност.

1. Точно едно от `1, 2, 3` е равно на `2`, така че резултатът е `True`. Ако съвпадаха две (или нито едно), щеше да се получи `False`. `so` свива съединението до обикновена булева стойност.

{% include nav.html %}
