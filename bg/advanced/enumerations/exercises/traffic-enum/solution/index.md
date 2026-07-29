---
title: 'Solution: Светофар'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Можете да намерите пълния код във файла [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Резултат

```
red is 0
amber is 1
green is 2
```

## Коментари

1. `my Light $current` е обикновена, изменяема променлива — ограничена само до типа `Light`. Присвояването на следващата константа придвижва светлината и числото следва името всеки път: `0`, `1`, `2`.

1. `$current++` изглежда, че трябва да премине към следващата светлина автоматично, но се проваля с грешка при проверка на типа. `++` третира константата като обикновено число и връща `Int` (`red` става `1`), а `Int` вече не отговаря на типа `Light`. Затова преместваме светлината, като присвояваме следващата константа, както по-горе.

1. Ограничението на типа се прилага при всяко присвояване, не само при първото. `$current` ще приеме `red`, `amber` или `green`, но присвояването на нещо, което не е `Light` — голо число или низ — би било грешка при проверка на типа.

{% include nav.html %}
