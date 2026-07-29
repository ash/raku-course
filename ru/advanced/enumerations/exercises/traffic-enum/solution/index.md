---
title: 'Решение: Светофор'
translations_gpt: true
---

{% include menu.html %}

Вот возможное решение задачи.

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

🦋 Исходный код можно найти в файле [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Вывод

```
red is 0
amber is 1
green is 2
```

## Комментарии

1. `my Light $current` -- это обычная изменяемая переменная, ограниченная только типом `Light`. Присваивание следующей константы переключает сигнал, и число следует за именем каждый раз: `0`, `1`, `2`.

1. `$current++` выглядит так, будто должно переключить на следующий сигнал автоматически, но вызывает ошибку проверки типа. `++` обрабатывает константу как простое число и возвращает `Int` (`red` становится `1`), а `Int` больше не соответствует типу `Light`. Поэтому вы переключаете сигнал, присваивая следующую константу, как показано выше.

1. Ограничение типа действует при каждом присваивании, не только при первом. `$current` принимает `red`, `amber` или `green`, но присваивание чего-то, что не является `Light` -- простого числа или строки -- приведет к ошибке проверки типа.

{% include nav.html %}
