---
title: Розв'язання вправи «Отримайте значення»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Знайдіть програму у файлі [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Вивід

```
a
```

## Коментарі

1. Канал повертає значення в тому порядку, у якому їх надіслано.

1. `'a'` надіслано першим, тож перший `.receive` повертає саме його.

{% include nav.html %}
