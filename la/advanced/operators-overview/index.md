---
title: Conspectus operatorum
translations_gpt:
---

{% include menu.html %}

Cum expressio plures operatores continet, Raku decidere debet quo ordine eos applicet. Duae regulae hoc regunt: _praecedentia_ et _associativitas_.

## Praecedentia

Praecedentia decernit quis operator arctius ligat. Multiplicatio altiorem praecedentiam quam additio habet, ergo primum fit:

```raku
say 2 + 3 * 4; # 14
```

Expressio legitur ut `2 + (3 * 4)`, dans `14` potius quam `20`. Semper parenthesibus uti potes ut alium ordinem imperes:

```raku
say (2 + 3) * 4; # 20
```

## Associativitas

Associativitas ordinem inter operatores _eiusdem_ praecedentiae decernit. Subtractio sinistro-associativa est, ergo a sinistra congregat:

```raku
say 8 - 3 - 2; # 3
```

Hoc est `(8 - 3) - 2`, quod est `3`. Elevatio ad potestatem autem dextro-associativa est:

```raku
say 2 ** 3 ** 2; # 512
```

Hic expressio congregat ut `2 ** (3 ** 2)`, id est `2 ** 9`, quod est `512`.

## Comparationes catenatae

Operatores comparationis _catenari_ possunt, quod naturaliter legitur et id quod ex mathematica exspectas facit:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

Valor medius cum ambobus vicinis comparatur: `1 < 2 < 3` verum est quia `1 < 2` et `2 < 3` ambo vera sunt.

{% include nav.html %}
