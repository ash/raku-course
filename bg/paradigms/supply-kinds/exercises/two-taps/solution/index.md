---
title: 'Решение: Две включвания'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Изход

```
[2 4 6]
[3 6 9]
```

## Коментари

1. `Supply.from-list` работи при поискване, така че пуска пълната си последователност за **всяко** включване независимо.

1. Това позволява на двете включвания да изпълняват различни конвейери върху един и същ източник: единият удвоява, другият утроява. Всяко вижда всички `1, 2, 3`, така че резултатите са `[2 4 6]` и `[3 6 9]`.

{% include nav.html %}
