---
title: Viktorīna — Apgalvojumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Pozitīvā lūkošanās atpakaļ `<?after '='>` pieprasa `=` tieši pirms pašreizējās pozīcijas, un tad `\d+` piemeklē ciparus. `=` tiek pārbaudīts, bet nepatērēts, tāpēc sakritība ir tikai `｢5｣`.

</div>

{% include nav.html %}
