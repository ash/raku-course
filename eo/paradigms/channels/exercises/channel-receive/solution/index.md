---
title: 'Solvo: Ricevu valoron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Vi povas trovi la fontkodon en la dosiero [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Eligo

```
a
```

## Komentoj

1. Kanalo redonas valorojn en la ordo, en kiu ili estis senditaj.

1. `'a'` estis sendita unue, do la unua `.receive` redonas ĝin.

{% include nav.html %}
