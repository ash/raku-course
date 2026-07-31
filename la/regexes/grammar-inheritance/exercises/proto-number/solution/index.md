---
title: 'Solutio: Numerus cum proto'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Inveni codicem fontem in archivo [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Exitus

```
True
```

## Commentarii

1. Tessera proto `number` duas variantes habet, `dec` et `hex`.

1. Pro `0xff` variantis `dec` solum primam `0` congruit, quod `xff` superesse sineret; variantis `hex` totum congruit. Congruentia longissimae tesserae ideo `hex` eligit, et catena analysatur. Eadem grammatica simplicem decimalem qualem `42` adhuc accipit.

{% include nav.html %}
