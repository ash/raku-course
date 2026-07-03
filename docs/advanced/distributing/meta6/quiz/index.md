---
title: 'Quiz — Distributions'
---

{% include menu.html %}

Which file describes a Raku distribution — its name, version, and what it provides?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

A distribution is described by `META6.json`, a JSON file at its top directory. Its `provides` key maps each module name to its source file, and `depends` lists the other distributions it needs.

</div>

{% include nav.html %}
