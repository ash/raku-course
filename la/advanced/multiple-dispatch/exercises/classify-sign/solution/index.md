---
title: 'Solutio: Magnitudinem classificare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Inveni codicem fontem in archivo [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Exitus

```
small
medium
large
```

## Commentarii

1. Omnes tres candidati unum `Int` accipiunt, itaque sine clausulis `where` inter se confligerent. Condiciones in primis duobus eos distinctos faciunt, et tertius receptaculum omnium est.

1. Clausulae `where` `$n.abs` probant, itaque sola magnitudo resultatum determinat et signum ignoratur. `size(7)` primo candidato congruit (`small`), dum `size(-250)` valorem absolutum `250` habet, qui ambabus condicionibus non satisfacit et ad receptaculum omnium cadit (`large`).

1. Candidati a specificissimo ad generalissimum probantur — exacte eo ordine quo hic scripti sunt.

{% include nav.html %}
