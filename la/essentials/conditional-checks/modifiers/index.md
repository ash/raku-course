---
title: '`if` et `unless` ut statement modificatores'
---

{% include menu.html %}

Raku praebet solutionem valde utilem cum vis simplicem sententiam conditionaliter exsequi. In hoc casu, non opus est separatum codicem creare. Modo pone `if` vel `unless` statim post sententiam. In Raku, tales structurae vocantur _modificatores sententiae_.

```raku
say 'Bonum postmeridianum' if $horae > 12;

say 'Omnia systemata operantur' unless $fractum;
```

{% include nav.html %}