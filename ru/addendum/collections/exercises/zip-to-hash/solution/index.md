---
title: 'Решение: Соедините два списка в хеш'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Исходный код можно найти в файле [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Вывод

```
Anna: 90
Bob: 85
Cara: 95
```

## Комментарии

1. `Z=>` — это метаоператор zip, применённый к конструктору пар `=>`: он шагает по обоим спискам
одновременно и строит из каждой позиции пару `имя => оценка`.

1. Присваивание этого списка пар переменной с сигилом `%` создаёт хеш, который затем печатается
в порядке ключей.

{% include nav.html %}
