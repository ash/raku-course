---
title: Viktorīna — Eksporta tagi
translations_gpt:
---

{% include menu.html %}

Modulis deklarē `sub hello is export` un `sub goodbye is export(:partings)`. Pēc `use Greeting :partings;` — kuras apakšprogrammas programma var izsaukt tieši?

{:.quiz}
1 | Tikai `goodbye`
0 | Tikai `hello`
0 | Gan `hello`, gan `goodbye`
0 | Nevienu no abām

{% include quiz.html %}

<div class="extended-explanation">

Nosaucot birku, tiek importēta šī grupa *noklusētās vietā*, tāpēc `:partings` ienes `goodbye`, bet `hello` atstāj. Lai iegūtu abas, prasītu iebūvēto birku `:ALL` ar `use Greeting :ALL;`.

</div>

{% include nav.html %}
