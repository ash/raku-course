---
title: 'Розв''язання: Робот, що крокує'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Вивід

```
8
```

## Коментарі

1. Атрибут `position` позначено `is rw`, щоб метод міг його змінювати, а типове значення `0` означає, що новий робот починає з початку координат.

1. Метод `move` надає своєму параметру типове значення — `$steps = 1`. Тому голий виклик `$r.move` просуває на один крок, тоді як `$r.move(5)` та `$r.move(2)` просувають на задану величину. Три виклики додають `5 + 1 + 2`, тож остаточна позиція дорівнює `8`.

{% include nav.html %}
