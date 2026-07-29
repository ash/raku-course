---
title: 'Решение: Два подключения'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Исходный код можно найти в файле [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Вывод

```
[2 4 6]
[3 6 9]
```

## Комментарии

1. `Supply.from-list` работает по требованию, поэтому он проигрывает всю свою последовательность
заново для **каждого** подключения, независимо от других.

1. Это позволяет двум подключениям выполнять разные конвейеры над одним и тем же источником: один
удваивает, другой утраивает. Каждое видит все значения `1, 2, 3`, поэтому результаты — `[2 4 6]`
и `[3 6 9]`.

{% include nav.html %}
