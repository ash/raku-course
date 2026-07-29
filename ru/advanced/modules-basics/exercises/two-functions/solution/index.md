---
title: 'Решение: Две функции в одном модуле'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи. В нём используются два файла.

## Код

Модуль `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

Программа `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Вывод

```console
$ raku -I. calc.raku
7
12
```

## Комментарии

1. Модуль может экспортировать сколько угодно подпрограмм; каждая несёт свой собственный
трейт `is export`.

1. И `add`, и `mul` становятся доступны в программе после единственного `use Calc`.

{% include nav.html %}
