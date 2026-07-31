---
title: 'Methodus `.raku`'
---

{% include menu.html %}

Tertia methodus repraesentationis, `.raku`, seriem cum repraesentatione valoris **codici simili** reddit — idealiter, seriem quam in programma reinserere possis ad eundem valorem recreandum. Quilibet valor in Raku eam habet.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Nota quomodo series `'Raku'` cum signis citationis redit, ut numerum a serie primo aspectu distinguere possis — exacte genus detailii quod dum errores corrigis desideras.

Methodus etiam pro datis compositis operatur, inclusis structuris insertis:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Quia `.raku` seriem ordinariam reddit, eam ubicumque series expectatur adhibere potes, exempli gratia intra nuntium interpolatum:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Utere `.raku` quotienscumque illam repraesentationem codici similem ut seriem vis, quam cum propriis nuntiis componas. Mox `dd` introducemus, instrumentum Rakudo quod eandem repraesentationem uno gradu pro te imprimit.

{% include nav.html %}
