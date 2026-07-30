---
title: 'Quiz — Luie reeksen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say (2, 4, 6 ... *)[5];
```

{:.quiz}
0 | 10
1 | 12
0 | 14
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

`(2, 4, 6 ... *)` is de oneindige reeks even getallen. Vanaf index nul geteld is element `5` het zesde even getal, `12`. Dankzij luiheid worden alleen zoveel elementen berekend als nodig is.

</div>

{% include nav.html %}
