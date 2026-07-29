---
title: 'Решение: Соедините промисы в цепочку'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Исходный код можно найти в файле [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Вывод

```
RAKU!
```

## Комментарии

1. Каждый `.then` строит новый промис, который выполняется, когда завершится предыдущий. Внутри
его блока `.result` — это значение, выданное предыдущим промисом.

1. Первое продолжение переводит `'raku'` в `'RAKU'`; второе дописывает `'!'`. Ожидание последнего
промиса, `$r`, проходит всю цепочку и даёт `'RAKU!'` — маленький конвейер, где каждый шаг
преобразует результат предыдущего.

{% include nav.html %}
