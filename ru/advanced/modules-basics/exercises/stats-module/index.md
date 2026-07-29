---
title: Используйте модуль статистики
translations_gpt:
---

{% include menu.html %}

## Задача

Вам дан модуль `Stats.rakumod`, который экспортирует две подпрограммы — `total` и `mean`,
причём `mean` построена на основе `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Напишите отдельную программу, которая использует этот модуль и для списка `10, 20, 30, 40`
печатает и сумму, и среднее значение.

## Пример

Запущенная с модулем в пути поиска, программа печатает:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
