---
title: Quiz — Iuncturae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Iunctura `all` vera est solum cum **omnis** valor congruit. Probatio `4 == all(2, 4, 6)` quaerit utrum `4` aequet `2` et `4` et `6` — quod non facit, itaque effectus est `False`.

Curiosus quid illud `True` facere *posset*? Pars sinistra unicuique ex `2`, `4` et `6` simul aequare deberet. Nullus singularis numerus potest — sed iunctura a sinistra potest: iunctura `any` quae **omnes tres** illos valores **continet** operatur, quia tunc unaquaeque comparatio succedit. Duae partes eiusdem magnitudinis esse non debent — sinistra valores superfluos ferre potest:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

Prima `True` est quia `any(2, 4, 6, 8)` adhuc `2`, `4` et `6` aequat (superfluum `8` non nocet). Secunda `False` est quia pars sinistra `6` non habet, itaque `left == 6` deficit.

</div>

{% include nav.html %}
