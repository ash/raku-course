---
title: Quiz — Dispatch met `where`
---

{% include menu.html %}

Wat print het volgende programma?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` voldoet aan de voorwaarde `where $n %% 2`, dus de meer specifieke kandidaat wordt gekozen en `even` wordt afgedrukt. De gewone `Int`-kandidaat is de vangnet voor alles wat niet aan de voorwaarde voldoet.

</div>

{% include nav.html %}
