---
title: Розв'язання вправи «Два підключення»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Вивід

```
[2 4 6]
[3 6 9]
```

## Коментарі

1. `Supply.from-list` працює на вимогу, тож він програє свою повну послідовність для **кожного** підключення незалежно.

1. Це дозволяє двом підключенням виконувати різні конвеєри над тим самим джерелом: одне подвоює, друге потроює. Кожне бачить усі `1, 2, 3`, тож результатами є `[2 4 6]` та `[3 6 9]`.

{% include nav.html %}
