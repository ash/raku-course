---
title: Решение для ‘Классные парты’
---

{% include menu.html %}

Ниже показано решение к этой проблеме.

## Код

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Вы можете найти исходный код в файле [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Вывод

Запустите программу по крайней мере дважды, пробуя четное и нечетное количество
учеников. Например, для чисел `23` и `24` программа выведет один и тот же
результат:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Комментарии

Недостаточно просто разделить число учеников на два. Важно правильно
обрабатывать четное и нечетное количество. Одно из решений для округления числа
вверх это: `$students div 2 + $students % 2`. Когда количество учеников четное,
второе слагаемое равно нулю, и весь результат равен половине от числа
учеников. Но когда количество учеников нечетно, первое слагаемое все еще будет
целым числом из-за использования `div` заместо `/`, тогда как второе слагаемое
добавляет дополнительную парту.

{% assign human=1 %}
{% include nav.html %}
