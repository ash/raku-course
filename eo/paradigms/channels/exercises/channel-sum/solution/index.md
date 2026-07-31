---
title: 'Solvo: Sumu kanalon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Eligo

```
21
```

## Komentoj

1. La produktanta promeso sendas la ses valorojn sur unu fadeno kaj fermas la kanalon. La konsumanta promeso, sur alia fadeno, uzas `.list` por kolekti ĉion ĝis la fermo kaj redonas la sumon (`[+]` adicias `1 + 2 + … + 6`).

1. `await $producer, $consumer` atendas **ambaŭ** promesojn kaj redonas iliajn rezultojn laŭvice. La rezulto de la produktanto ne estas bezonata ĉi tie (`$sent`); tiu de la konsumanto estas la sumo, `21`. La kanalo estas tio, kio sekure portas la valorojn de la produktanta fadeno al la konsumanta fadeno.

{% include nav.html %}
