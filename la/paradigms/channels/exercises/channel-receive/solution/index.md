---
title: 'Solutio: Valorem accipe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Inveni codicem fontem in archivo [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Exitus

```
a
```

## Commentarii

1. Canalis valores eo ordine reddit quo missi sunt.

1. `'a'` primum missum est, itaque primum `.receive` illud reddit.

{% include nav.html %}
