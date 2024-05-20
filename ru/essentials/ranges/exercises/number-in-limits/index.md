---
title: Число в своих границах
---

{% include menu.html %}

## Проблема

Напишите программу, которая просит ввести три числа: `$begin`, `$end` и `$n` и
выводит `True` или `False` в зависимости от того, находится ли `$n` в интервале
`[$begin, $end)` (включая `$begin`, но исключая `$end`).

Можете предполагать, что введенные числа соответствуют условию
`$begin < $end + 1`, но не добавляйте код, чтобы это проверить.

## Пример

Возможный вывод программы для обоих случаев показан ниже:

```console
$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 15
True

$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 30
False
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
