---
title: Quiz — await et sleep
translations_gpt:
---

{% include menu.html %}

Quid haec programma agit?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Statim `waiting` imprimit, deinde `42` circiter duobus secundis post
0 | Duo secunda consistit, deinde `waiting` et `42` simul imprimit
0 | `waiting` et `42` statim imprimit — dormitio in fundo accidit
0 | `waiting` imprimit, deinde `Promise` — promissum dormiens exspectare non potes

{% include quiz.html %}

<div class="extended-explanation">

`start` promissum **statim** reddit — blocus, cum `sleep` suo, in filo fundi currit. Itaque `say 'waiting'` illico exsequitur. `await` est quod moratur: programma ibi consistit donec blocus fundi somnum duorum secundorum finiat et `42` producat, quod deinde imprimitur. Mora ad lineam `await` pertinet, non ad lineam `start`.

</div>

{% include nav.html %}
