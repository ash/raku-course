---
title: 'Розв''язання: Квадрат і куб'
---

{% include menu.html %}

## Код 1

Найпростіше рішення — скористатися оператором `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Знайдіть програму у файлі [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube.raku).

## Код 2

Дещо стильніше рішення — скористатися надрядковими знаками Unicode.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Знайдіть програму у файлі [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube-2.raku).

## Вивід

Запустіть програму кілька разів і перевірте її з різними числами.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}
