---
title: 'Решение: Клас за точка'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Намерете програмата във файла [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Изход

```
5
```

## Коментари

1. Двете декларации `has $.x` и `has $.y` създават атрибутите заедно с аксесорите им за четене.

1. Всеки обект пази свои собствени `x` и `y`, така че `$a` и `$b` съобщават различни координати, макар да са обекти от един и същ вид. Тази независимост е целият смисъл на атрибутите — всеки екземпляр носи свои собствени данни.

{% include nav.html %}
