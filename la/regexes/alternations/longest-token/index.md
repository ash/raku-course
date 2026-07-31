---
title: Tessera longissima et prima congruentia
translations_gpt:
---

{% include menu.html %}

Cum duae alternativae eodem loco ambae congruere possent, operator `|` eam eligit quae **longissimam** textus partem congruit. Hoc _congruentia longissimae tesserae_ appellatur:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Quamquam `cat` prius scriptum est et congrueret, `|` longiorem `catdog` praefert.

Interdum contrarium vis — alternativas eo ordine quo eas scripsisti temptare et **primam** quae congruit capere. Id est quod duplex virga `||` agit:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Nunc `cat` prius temptatur et congruit, itaque machina ibi consistit et `catdog` numquam considerat.

Utere `|` (longissima tessera) cum «optimam» congruentiam sine ordinis ratione vis — haec est electio solita, et ea cui grammaticae nituntur. Utere `||` (prima congruentia) cum ordo alternativarum significans est et vis priores vincere.

{% include nav.html %}
