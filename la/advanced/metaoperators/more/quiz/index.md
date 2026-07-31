---
title: Quiz — Hyper et crux
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Meta-operator hyper `»+»` operatorem `+` ad omne elementum applicat. Cum uno valore `10` a dextra, ille valor per totam listam extenditur, ergo unumquodque elementum `10` adipiscitur: `(11 12 13)`. (Reductio `[+]` potius listam in unicam summam `6` contraheret.)

</div>

{% include nav.html %}
