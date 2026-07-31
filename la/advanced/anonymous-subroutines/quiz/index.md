---
title: Quiz — Bloci sagittati
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Cuspis acuta plures parametros enumerare potest: `-> $a, $b` duos accipit. Hic in variabili omnino non servatur -- parenthesibus circumdatur et statim cum `(3, 4)` vocatur, `$a` ad `3` et `$b` ad `4` ligans. Clausura eos multiplicat ut `12` det, et postpositum `.say` id imprimit.

</div>

{% include nav.html %}
