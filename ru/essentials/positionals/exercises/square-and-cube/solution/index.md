---
title: 'Решение: Квадрат и куб'
---

{% include menu.html %}

## Код 1

Прямолинейное решение — использовать оператор `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Найдите программу в файле [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube.raku).

## Код 2

Немного более стильное решение — использовать Unicode надстрочные символы.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Найдите программу в файле [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/square-and-cube-2.raku).

## Вывод

Запустите программу несколько раз и протестируйте её с разными числами.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}