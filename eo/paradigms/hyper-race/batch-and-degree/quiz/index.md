---
title: Kvizo — batch kaj degree
translations_gpt:
---

{% include menu.html %}

En `(1..1000).hyper(:degree(4), :batch(50))`, kion regas la `:batch(50)`?

{:.quiz}
1 | Kiom da elementoj ĉiu laboranto traktas per unu fojo antaŭ ol preni pliajn
0 | Kiom da laborfadenoj kuras samtempe
0 | Kiom da elementoj la tuta ĉenstacio rajtas trakti
0 | La nombron de procesoraj kernoj, kiujn la programo rajtas uzi

{% include quiz.html %}

<div class="extended-explanation">

`:batch` estas la **pecgrando** — kiom da elementoj laboranto prenas po vico. La nombro de laborantoj estas `:degree` (ĉi tie `4`). Pli granda aro reduktas la kunordigan ŝarĝon; pli malgranda ekvilibrigas neegalan laboron pli egale. Ambaŭ estas sugestoj, kiujn la kompililo povas alĝustigi aŭ ignori.

</div>

{% include nav.html %}
