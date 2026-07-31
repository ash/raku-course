---
title: 'Solvo: Malplenigu kanalon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Vi povas trovi la fontkodon en la dosiero [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Eligo

```
a,b
```

## Komentoj

1. `.list` malplenigas ĉiun valoron restantan en la fermita kanalo, laŭvice.

1. `.join(',')` gluas la du ĉenojn kune kun komo inter ili.

{% include nav.html %}
