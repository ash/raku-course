---
title: 'Вправа: Якщо число знаходиться в межах'
---

{% include menu.html %}

## Проблема

Напишіть програму, яка запитує введення трьох чисел: `$begin`, `$end` і `$n` та виводить `True` або `False` в залежності від того, чи знаходиться `$n` в діапазоні `[$begin, $end)` (включаючи `$begin`, але виключаючи `$end`).

Припустимо, що введені числа задовольняють умову: `$begin < $end + 1`, але не додавайте код для перевірки цього.

## Приклад

Можливий вивід програми для обох випадків показано нижче:

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

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}