---
title: 'Solutio: Clavem delere'
---

{% include menu.html %}

Hic est possibilis solutio huius muneris.

## Codex

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Inveni codicem fontem in archivo [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Exitus

```
2
```

## Commentarii

1. Adverbium `:delete` introitum e tabula removet (hic valorem quem reddit ignoramus).

1. Tabula tribus introitibus incepit et nunc `2` habet, confirmans unum remotum esse. Numeratio per `.elems` output praedictibilem facit sine ordine clavium dependendo.

{% include nav.html %}
