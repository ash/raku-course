---
title: Structuram datae dump
translations_gpt:
---

{% include menu.html %}

## Problema

Data est tibi structura datorum inserta sequens:

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');
```

Duo cum ea fac:

1. Imprime exscriptionem developori amicam `@data` utens `dd`.
2. Imprime eandem repraesentationem ut seriem, praefixam textu `Structure: `.

## Exemplum

Programma duas lineas similes imprimit:

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
