---
title: 'Solutio: Begin primum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Inveni codicem fontem in archivo [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Exitus

```
5
```

## Commentarii

1. `BEGIN { 2 + 3 }` currit dum compilatio fit et producit `5`. Ut expressio usus, copia `BEGIN` valorem suum reddit, qui assignatur ad `$compiled`.

1. Computatio semel tantum fit, tempore compilationis; tempore exsecutionis `$compiled` simpliciter constantem `5` continet. Hoc est quomodo `BEGIN` adhibetur ad valores praecomputandos, non solum ad mature imprimendum.

{% include nav.html %}
