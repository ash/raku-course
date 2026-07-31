---
title: Quiz — Distribuzioni
translations_gpt: 'Quiz — Distribuzioni'
---

{% include menu.html %}

Quale file descrive una distribuzione Raku — il suo nome, la versione e cosa fornisce?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Una distribuzione è descritta da `META6.json`, un file JSON nella sua directory principale. La sua chiave `provides` associa ogni nome di modulo al rispettivo file sorgente, e `depends` elenca le altre distribuzioni di cui ha bisogno.

</div>

{% include nav.html %}
