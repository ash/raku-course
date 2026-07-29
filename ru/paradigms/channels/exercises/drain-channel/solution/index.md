---
title: 'Решение: Опустошите канал'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Исходный код можно найти в файле [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Вывод

```
a,b
```

## Комментарии

1. `.list` вычерпывает по порядку все значения, оставшиеся в закрытом канале.

1. `.join(',')` склеивает две строки, поставив между ними запятую.

{% include nav.html %}
