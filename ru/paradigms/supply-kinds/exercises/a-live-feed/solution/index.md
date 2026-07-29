---
title: 'Решение: Позднее подключение'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Вывод

```
[2 3]
```

## Комментарии

1. `Supplier` — это передающая сторона, а подключаются к его `.Supply`. Живой supply вещает
только тем подключениям, которые слушают **в момент** каждой выдачи.

1. `emit(1)` происходит до того, как появилось хоть одно подключение, поэтому это значение
потеряно — как если включить радиостанцию после того, как песня уже отзвучала. Перехвачены
только `2` и `3`, выданные после подключения, что даёт `[2 3]`.

{% include nav.html %}
