---
title: 'Упражнение: Увеличение на заплатата'
---

{% include menu.html %}

## Проблем

Даден е хеш с данни за служител:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Увеличете заплатата с 5&thinsp;% и я отпечатайте заедно с името на служителя. Уверете се, че хешът `%employee` запазва правилните стойности след увеличението.

## Пример

Ето очаквания изход на програмата:

```console
$ raku salary-raise.raku
Новата заплата на Eliza Vents: 3150
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}