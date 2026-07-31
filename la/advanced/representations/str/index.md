---
title: 'Methodus `.Str`'
---

{% include menu.html %}

Methodus `.Str` formam **seriei planae** valoris reddit. Vocatur quotienscumque valor in *contextu serierum* adhibetur: a `print` et `put`, ab operatore concatenationis `~`, et per interpolationem serierum intra signa citationis duplicia.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Nota quod ordo **sine uncis** rediit, elementis simpliciter spatiis iunctis — haec est differentia visibilis a [`.gist`](../gist), quae eos retinet. Compara ambos iuxta positos:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Quia interpolatio `.Str` adhibet, ordo intra seriem insertus modo plano ostenditur:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
