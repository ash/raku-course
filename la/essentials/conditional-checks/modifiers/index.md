---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku praebet solutionem valde utilem cum vis simplicem sententiam conditionaliter exsequi. In hoc casu, non opus est separatum codicem creare. Modo pone `si` vel `nisi` statim post sententiam. In Raku, tales structurae vocantur _modificatores sententiae_.

```raku
dic 'Bonum postmeridianum' si $horae > 12;

dic 'Omnia systemata operantur' nisi $fractum;
```

{% include nav.html %}