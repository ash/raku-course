---
title: 'Решение: Создайте переменные всех возможных типов'
---

{% include menu.html %}

Вероятно, это не тот тип программ, который вы будете создавать на практике. Тем не менее, важно знать, как исследовать части реальных программ.

## Код

Вот возможное решение, которое создает переменные четырех упомянутых типов и выводит их типы.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Найдите программу в файле [types.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/types.raku).

## Вывод

Эта программа выводит следующий результат:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}