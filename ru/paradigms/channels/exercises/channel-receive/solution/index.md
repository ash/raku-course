---
title: 'Решение: Получите значение'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Исходный код можно найти в файле [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Вывод

```
a
```

## Комментарии

1. Канал возвращает значения в том порядке, в каком они были отправлены.

1. `'a'` было отправлено первым, поэтому первый `.receive` возвращает именно его.

{% include nav.html %}
