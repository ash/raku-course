---
title: 'Solutio: Blocum intrare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Inveni codicem fontem in archivo [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Exitus

```
--entering
body 1
--entering
body 2
```

## Commentarii

1. `ENTER` currit quotiens copia intratur, ante corpus eius. Quoniam ansa corpus suum semel per iterationem intrat, `--entering` ante quamque lineam `body` imprimitur.

1. Haec est differentia inter `ENTER` et `FIRST`: `FIRST` semel tantum pro tota ansa curreret, dum `ENTER` in quoque introitu currit.

{% include nav.html %}
