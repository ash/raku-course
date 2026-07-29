---
title: 'Solution: Оператор за средна стойност'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Можете да намерите пълния код във файла [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Резултат

```
7
```

## Коментари

1. Операторът е деклариран като `infix:<avg>`, така че се пише между двата си операнда, точно като `+` или `~`.

1. Тялото събира двата операнда и дели на две. За `4` и `10` резултатът е `7`.

{% include nav.html %}
