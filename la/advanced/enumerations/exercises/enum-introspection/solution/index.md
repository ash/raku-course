---
title: 'Solutio: Numerare et summam'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Inveni codicem fontem in archivo [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Exitus

```
4
41
```

## Commentarii

1. Constantes ut paria definitae sunt, itaque unaquaeque valorem a nobis electum accipit potius quam numerationem automaticam ab zero.

1. `.enums` tabulam ab unoquoque nomine constantis ad eius valorem reddit. `.elems` introitus numerat — quattuor nummi sunt.

1. `.values` solos numeros post nomina extrahit, et `.sum` eos addit: `1 + 5 + 10 + 25` est `41`.

{% include nav.html %}
