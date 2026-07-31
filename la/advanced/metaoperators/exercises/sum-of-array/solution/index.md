---
title: 'Solutio: Medietas array'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Inveni codicem fontem in archivo [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Exitus

```
25
```

## Commentarii

1. Meta-operator reductionis `[+]` operatorem `+` inter omnia elementa `@data` ponit, ergo `[+] @data` aequivalet `10 + 20 + 30 + 40`, id est, `100`. Parentheses necessariae sunt ut reductio ante divisionem fiat.

1. Summam per `@data.elems`, numerum elementorum, dividens medium `25` dat. Si eventus aequaliter non divideretur, Raku exactum `Rat` potius quam rotundatum produxisset.

{% include nav.html %}
