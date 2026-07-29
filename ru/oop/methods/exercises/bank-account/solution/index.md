---
title: 'Решение: Шагающий робот'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 Исходный код можно найти в файле [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Вывод

```
8
```

## Комментарии

1. Атрибут `position` объявлен с `is rw`, чтобы метод мог его изменять, и по умолчанию равен
`0`, так что новый робот начинает в начале координат.

1. Метод `move` задаёт своему параметру значение по умолчанию — `$steps = 1`. Поэтому вызов
без аргументов, `$r.move`, продвигает на один шаг, а `$r.move(5)` и `$r.move(2)` — на указанное
число. Три вызова дают в сумме `5 + 1 + 2`, поэтому итоговая позиция равна `8`.

{% include nav.html %}
