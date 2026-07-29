---
title: Розв'язання вправи «З'єднайте два списки в хеш»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Знайдіть програму у файлі [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Вивід

```
Anna: 90
Bob: 85
Cara: 95
```

## Коментарі

1. `Z=>` — це метаоператор застібки, застосований до конструктора пар `=>`: він
крокує обома списками в ногу й будує з кожної позиції пару `ім'я => бал`.

1. Присвоєння цього списку пар змінній із `%` створює хеш, який потім друкують у
порядку ключів.

{% include nav.html %}
