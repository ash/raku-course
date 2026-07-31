---
title: Quiz — Recursio cum subprogrammatibus multi
translations_gpt:
---

{% include menu.html %}

Datis `multi fact(0) { 1 }` et `multi fact($n) { $n * fact($n - 1) }`, quam partem candidatus `multi fact(0)` agit?

{:.quiz}
1 | Est casus fundamentalis — candidatus quem missio eligit cum argumentum est `0`
0 | Valorem praedefinitum ponit qui pro omni argumento redditur
0 | In omni vocatione primus currit, ante alterum candidatum
0 | Est syntaxis necessaria quam Raku tempore exsecutionis neglegit

{% include quiz.html %}

<div class="extended-explanation">

Litterale `0` in signatura illum candidatum solum tunc congruere facit cum argumentum exacte `0` est. Est casus fundamentalis ut proprium subprogramma expressus: dum argumentum maius est, missio `multi fact($n)` eligere pergit, et cum recursio ad `0` pervenit, ad `multi fact(0)` transit et consistit.

</div>

{% include nav.html %}
