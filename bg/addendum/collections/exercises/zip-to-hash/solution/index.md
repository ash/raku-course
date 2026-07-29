---
title: 'Решение: Ципнете два списъка в хеш'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Намерете програмата във файла [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Изход

```
Anna: 90
Bob: 85
Cara: 95
```

## Коментари

1. `Z=>` е метаоператорът цип, приложен към конструктора на двойки `=>`: той върви по
двата списъка в крак и изгражда двойка `име => точки` от всяка позиция.

1. Присвояването на този списък от двойки на променлива с `%` създава хеш, който после
се отпечатва в реда на ключовете.

{% include nav.html %}
