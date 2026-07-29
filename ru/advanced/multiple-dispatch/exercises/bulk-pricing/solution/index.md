---
title: 'Решение: Оптовая цена'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Исходный код можно найти в файле [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Вывод

```
normal price
bulk price
```

## Комментарии

1. Первый кандидат содержит конструкцию `where`, которая принимает только количество от 10 и более, поэтому вызов `price(25)` направляется к нему.

1. Второй кандидат не имеет условия и служит перехватчиком, поэтому `price(3)` попадает туда.

{% include nav.html %}
