---
title: Kvizo — Agoklasoj
translations_gpt:
---

{% include menu.html %}

Kiel vi diras al `.parse` uzi agoklason nomatan `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

La agobjekto estas transdonata per la nomita argumento `actions`, kaj ĝi devas esti **ekzemplero**, kreita per `.new`. Dum la gramatiko analizas, la kongruaj ĵetonaj metodoj sur tiu ekzemplero ruliĝas kaj konstruas la rezulton.

</div>

{% include nav.html %}
