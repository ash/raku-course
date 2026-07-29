---
title: 'Solution: Якщо число в межах'
---

{% include menu.html %}

Програма використовує діапазон, який створюється з чисел, введених користувачем. Потім перевірка smartmatch тестує, чи знаходиться третє число в межах діапазону. Результат тесту smartmatch є булевим значенням, тому ми можемо одразу його вивести.

## Код

Ось рішення:

```raku
my $begin = prompt 'Від (включно): ';
my $end = prompt 'До (виключно): ';

my $n = prompt 'Яке це число? ';

say $n ~~ $begin ..^ $end;
```

🦋 Знайдіть програму у файлі [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/ranges/number-in-limits.raku).

## Вивід

Перевірте різні випадки, включаючи коли число збігається з кінцем діапазону.

```console
$ raku exercises/ranges/number-in-limits.raku
Від (включно): 1
До (виключно): 2
Яке це число? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
Від (включно): 100
До (виключно): 200
Яке це число? 100
True

$ raku exercises/ranges/number-in-limits.raku
Від (включно): -5
До (виключно): -2
Яке це число? -2
False
```

## Коментар

Зверніть увагу, як правий кінець діапазону виключається: `$begin ..^ $end`.

{% include nav.html %}