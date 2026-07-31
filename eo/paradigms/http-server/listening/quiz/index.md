---
title: Kvizo — Aŭskultado
translations_gpt:
---

{% include menu.html %}

Kiu argumento igas `IO::Socket::INET` atendi envenantajn konektojn anstataŭ elvoki al servilo?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` metas la kontaktskatolon en servilan reĝimon, atendante ĉe loka adreso kaj pordo. Vi poste vokas `.accept` por preni ĉiun envenantan konekton. (`.accept` estas metodo, ne konstruila argumento.)

</div>

{% include nav.html %}
