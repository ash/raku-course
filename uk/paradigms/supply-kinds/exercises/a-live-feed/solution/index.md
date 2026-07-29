---
title: Розв'язання вправи «Ввімкнутися пізно»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Вивід

```
[2 3]
```

## Коментарі

1. `Supplier` є стороною надсилання; підключаються до його `.Supply`. Живий потік транслює лише тим підключенням, що слухають **у мить** кожної видачі.

1. `emit(1)` стається до того, як з'явилося бодай одне підключення, тож його втрачено — як увімкнути радіостанцію після того, як пісня вже відіграла. Захоплено лише `2` та `3`, видані після підключення, що дає `[2 3]`.

{% include nav.html %}
