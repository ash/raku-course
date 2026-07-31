---
title: Quiz — Lambdae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Blocus cuspidatus lambda est quae argumentum suum sibi ipsi addit. Cum `9` vocata, `9 + 9` reddit, quod est `18`.

</div>

{% include nav.html %}
