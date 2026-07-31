---
title: 'Solutio: Typificatum vel non typificatum'
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Inveni codicem fontem in archivo [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Exitus

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Commentarii

1. `dd` duos continentes diverse refert. Pro eo qui sine typo est, solum `$untyped` imprimit, dum pro eo qui typum habet, typum declaratum praeponit: `Int $typed`. Illud praefixum exacte est differentia quam typus declaratus facit.

1. Valores vacui quoque differunt. Continens sine typo a valore indefinito nudo `Any` incipit, dum continens cum typo a valore indefinito *sui* typi, `Int`, incipit.

1. Postquam ambis `42` assignatum est, valores idem apparent, sed `$typed` adhuc typum suum portat et valorem non integrum reiceret — dissimilis a `$untyped`, qui quidlibet accipit.

{% include nav.html %}
