---
title: 'Solution: FizzBuzz у циклі'
---

{% include menu.html %}

Цього разу перевірка на подільність відбувається в циклі. Замість прямого виведення, фраза спочатку накопичується в окремій змінній і пізніше інтерполюється в рядок.

## Код

Ось нове рішення:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Знайдіть програму у файлі [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fizbuzz-loop.raku).

## Вивід

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Коментар

Для педантичного вирішувача проблем, рішення може бути не ідеальним, оскільки воно виводить пробіл після двокрапки навіть для тих чисел, які не отримали Fizz або Buzz. Змініть програму, щоб уникнути цієї проблеми.

{% include nav.html %}