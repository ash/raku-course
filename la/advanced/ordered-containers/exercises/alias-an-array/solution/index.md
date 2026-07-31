---
title: 'Solutio: Alias pro array'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Inveni codicem fontem in archivo [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Exitus

```
[10 20 30 40]
```

## Commentarii

1. Vinculum `@alias := @original` facit `@alias` aliud nomen pro eodem continenti ordinis, non copiam eius.

1. Mutatio hac vice per `@original` fit, et structuralis est — `push` elementum addit. Quia ambo nomina idem ipsum continens sunt, `@alias` quoque novum elementum videt. Duo nomina omnino permutabilia sunt: non refert quod adhibeas ad legendum vel ad ordinem mutandum.

{% include nav.html %}
