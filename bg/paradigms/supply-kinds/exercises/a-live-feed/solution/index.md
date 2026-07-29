---
title: 'Решение: Включване със закъснение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 Намерете програмата във файла [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Изход

```
[2 3]
```

## Коментари

1. `Supplier` е изпращащата страна; включвате се към неговия `.Supply`. Живият поток излъчва само към онези включвания, които слушат **в мига** на всяко подаване.

1. `emit(1)` се случва, преди изобщо да съществува включване, така че то се губи — както да пуснете радиостанция, след като песента вече е свирила. Уловени са само `2` и `3`, подадени след включването, което дава `[2 3]`.

{% include nav.html %}
