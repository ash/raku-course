---
title: Розв'язання вправи «Сума каналу»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Вивід

```
21
```

## Коментарі

1. Обіцянка-виробник надсилає шість значень в одному потоці й закриває канал. Обіцянка-споживач, в іншому потоці, використовує `.list`, щоб зібрати все до закриття, і повертає суму (`[+]` додає `1 + 2 + … + 6`).

1. `await $producer, $consumer` чекає на **обидві** обіцянки й повертає їхні результати по порядку. Результат виробника тут не потрібен (`$sent`); результат споживача — це сума, `21`. Саме канал безпечно переносить значення з потоку виробника в потік споживача.

{% include nav.html %}
