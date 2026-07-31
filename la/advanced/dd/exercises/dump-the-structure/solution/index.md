---
title: 'Solutio: Structuram datae dump'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Inveni codicem fontem in archivo [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Exitus

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Commentarii

1. `dd @data` repraesentationem codici similem contentorum ordinis imprimit. In flumen erroris normalis scribit.

1. Methodus `.raku` eandem repraesentationem ut seriem reddit, quae deinde in nuntium normalem per interpolationem codicis inseritur et cum `say` ad flumen output normalis imprimitur.

1. Duae lineae hic idem apparent, sed per diversa flumina output transeunt: prima a `dd` venit (error normalis), secunda a `say` (output normalis). Compara sequentia:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
