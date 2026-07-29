---
title: 'Решение: Източете канал'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Намерете програмата във файла [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Изход

```
a,b
```

## Коментари

1. `.list` източва всяка стойност, останала в затворения канал, по ред.

1. `.join(',')` слепва двата низа, поставяйки запетая между тях.

{% include nav.html %}
