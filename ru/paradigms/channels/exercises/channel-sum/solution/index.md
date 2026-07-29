---
title: 'Решение: Сумма из канала'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Исходный код можно найти в файле [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Вывод

```
21
```

## Комментарии

1. Промис-производитель отправляет шесть значений в одном потоке и закрывает канал.
Промис-потребитель в другом потоке методом `.list` собирает всё, что пришло до закрытия,
и возвращает сумму (`[+]` складывает `1 + 2 + … + 6`).

1. `await $producer, $consumer` дожидается **обоих** промисов и возвращает их результаты
по порядку. Результат производителя здесь не нужен (`$sent`), а результат потребителя — это
сумма `21`. Именно канал безопасно переносит значения из потока производителя в поток потребителя.

{% include nav.html %}
