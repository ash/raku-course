---
title: 'Решение: Получете стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Намерете програмата във файла [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Изход

```
a
```

## Коментари

1. Каналът връща стойностите в реда, в който са изпратени.

1. `'a'` е изпратено първо, така че първият `.receive` връща именно него.

{% include nav.html %}
