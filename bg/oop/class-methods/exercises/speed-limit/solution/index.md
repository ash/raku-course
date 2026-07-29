---
title: 'Решение: Формула върху класа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Намерете програмата във файла [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Изход

```
314
```

## Коментари

1. Методът не докосва нито един атрибут — работи само с параметъра си `$r`, — така че може да бъде извикан върху самия клас, без първо да се създава обект.

1. `Geometry.circle-area(10)` извиква метода върху обекта на типа, подавайки `10`. Резултатът е `π * 10 * 10`, а след закръгляване — `314`.

{% include nav.html %}
