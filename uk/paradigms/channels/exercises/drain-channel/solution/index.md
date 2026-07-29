---
title: Розв'язання вправи «Осушіть канал»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Знайдіть програму у файлі [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Вивід

```
a,b
```

## Коментарі

1. `.list` осушує кожне значення, що залишилося в закритому каналі, по порядку.

1. `.join(',')` склеює два рядки, ставлячи між ними кому.

{% include nav.html %}
