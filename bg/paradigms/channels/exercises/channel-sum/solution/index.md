---
title: 'Решение: Сума от канал'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Изход

```
21
```

## Коментари

1. Обещанието-производител изпраща шестте стойности в една нишка и затваря канала. Обещанието-потребител, в друга нишка, използва `.list`, за да събере всичко до затварянето, и връща сумата (`[+]` събира `1 + 2 + … + 6`).

1. `await $producer, $consumer` изчаква **и двете** обещания и връща резултатите им по ред. Резултатът на производителя тук не е нужен (`$sent`); резултатът на потребителя е сумата — `21`. Именно каналът безопасно пренася стойностите от нишката на производителя към нишката на потребителя.

{% include nav.html %}
