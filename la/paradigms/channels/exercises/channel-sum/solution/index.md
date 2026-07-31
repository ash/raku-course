---
title: 'Solutio: Canalem summa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Exitus

```
21
```

## Commentarii

1. Promissum productoris sex valores in uno filo mittit canalemque claudit. Promissum consumptoris, in alio filo, `.list` adhibet ut omnia usque ad clausuram colligat summamque reddat (`[+]` `1 + 2 + … + 6` addit).

1. `await $producer, $consumer` **utrumque** promissum exspectat et effectus eorum ordine reddit. Effectus productoris hic non eget (`$sent`); effectus consumptoris summa est, `21`. Canalis est id quod valores tuto ex filo productoris ad filum consumptoris fert.

{% include nav.html %}
