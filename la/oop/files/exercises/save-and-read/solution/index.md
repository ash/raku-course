---
title: 'Solutio: Serva et lege'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Inveni codicem fontem in archivo [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Exitus

```
84
```

## Commentarii

1. `spurt` archivum creat et chordam in illud scribit; `slurp` totum archivum retro in chordam legit. Simul plenum iter servandi et onerandi efficiunt.

1. Quod ex `slurp` redit textus est — `"42\n"` — itaque novam lineam sequentem per `trim` amputamus et `.Int` vocamus ut illud in numerum vertamus antequam arithmeticam agamus. Effectus, `42 * 2`, est `84`.

1. Programma tamen etiam sine `.trim.Int` operatur.

{% include nav.html %}
