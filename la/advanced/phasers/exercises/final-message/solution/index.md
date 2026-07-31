---
title: 'Solutio: Nuntius finalis'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Inveni codicem fontem in archivo [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Exitus

```
processed 3 items
```

## Commentarii

1. Phaser `END` scriptus est ante ansam, sed ultimus currit — postquam codex principalis finitus est. Tunc `$count` ter incrementatus est.

1. Quia phaser super `$count` clauditur, valorem *finalem* variabilis legit, non `0` quem tenebat cum phaser in fonte apparuit. Haec est ratio usitata cur summarium in `END` ponitur.

{% include nav.html %}
