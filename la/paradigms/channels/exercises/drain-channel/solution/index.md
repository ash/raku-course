---
title: 'Solutio: Canalem exhauri'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Inveni codicem fontem in archivo [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Exitus

```
a,b
```

## Commentarii

1. `.list` omnem valorem in canali clauso relictum exhaurit, ordine.

1. `.join(',')` duas catenas comma interposito conglutinat.

{% include nav.html %}
