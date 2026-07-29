---
title: 'Решение: Дождитесь supply'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Исходный код можно найти в файле [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Вывод

```
final reading: 23
```

## Комментарии

1. Ожидание supply блокирует выполнение, пока поток не выдаст всё, что у него есть, — то самое
«ждать до завершения», которое `await` даёт и для промиса, — а его значением становится
**последнее**, что выдал supply, то есть `23`.

1. Это подходит для потока, в котором важно лишь конечное состояние, например для последнего
показания датчика. Если же вам нужно *каждое* значение, это работа для `.tap` или блока `react`,
как в предыдущих разделах.

{% include nav.html %}
