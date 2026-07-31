---
title: Quiz — Promissa combinare
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` effectus duorum promissorum ordine reddit, `(2, 3)`. Metaoperator reductionis `[*]` eos multiplicat, dans `6`.

</div>

{% include nav.html %}
