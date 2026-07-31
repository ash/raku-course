---
title: 'Solutio: Valor booleanus cum proto'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Inveni codicem fontem in archivo [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Exitus

```
True
True
False
```

## Commentarii

1. Tessera proto `bool` duas variantes nominatas habet, `true` et `false`.

1. Unaquaeque analysis variantem congruentem eligit, itaque et `'true'` et `'false'` succedunt. Tessera proto est modus mundus grammaticae dicendi «una ex his alternativis nominatis».

1. `'unknown'` neutram variantem congruit, itaque nihil est ad quod tessera proto mittat et analysis deficit — `False`. Proto exacte eas alternativas quas enumeras accipit, et nihil aliud.

{% include nav.html %}
