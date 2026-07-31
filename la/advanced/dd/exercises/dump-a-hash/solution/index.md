---
title: 'Solutio: Hash dump'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Inveni codicem fontem in archivo [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Exitus

```
{:alpha(1), :beta(2)}
```

## Commentarii

1. `dd` hash in forma codici simili imprimit, cum quoque pare ut `:key(value)`.

1. Claves ordine alphabetico exeunt — `alpha` ante `beta` — etsi `beta` primum scriptum est.

{% include nav.html %}
