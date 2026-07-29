---
title: 'Solution: Порівняти `say` та `put`'
---

{% include menu.html %}

## Код

Ось одне з можливих рішень:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Для більшої впевненості, ви також можете вивести тип змінної, наприклад, як показано для масивів і списків, щоб переконатися, що ви створили змінну бажаного типу.

🦋 Знайдіть програму у файлі [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/compare-say-and-put.raku).

## Вивід

Вивід програми, показаної вище, наведено нижче.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	бета
```

## Коментарі

Розглядаючи вивід програми, ви можете чітко побачити, що немає різниці при виведенні простих типів даних, таких як числа і рядки. Для агрегатних типів даних `say` створює трохи більш "шумний" вивід у порівнянні з `put`. З іншого боку, для хешів `put` виводить їх у вигляді таблиці в порівнянні з однією лінією у `say`.

Різниця між форматами виводу визначається тим, як методи `Str` і `gist` реалізовані для конкретного типу. Ми поговоримо про це детальніше пізніше у курсі.

{% include nav.html %}