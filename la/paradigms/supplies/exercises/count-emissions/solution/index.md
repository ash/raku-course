---
title: 'Solutio: Valores emissos numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Inveni codicem fontem in archivo [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Exitus

```
5
```

## Commentarii

1. Coniunctio semel pro valore emisso currit, quicumque valores sunt.

1. `$count` singulis vicibus augere numerum totum valorum dat, `5`.

{% include nav.html %}
