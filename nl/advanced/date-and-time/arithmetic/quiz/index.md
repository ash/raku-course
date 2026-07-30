---
title: Quiz — Datumrekenen
---

{% include menu.html %}

Wat print het volgende programma?

```raku
say Date.new(2026, 1, 28) + 5;
```

{:.quiz}
1 | 2026-02-02
0 | 2026-01-33
0 | 2026-02-05
0 | 2026-02-03

{% include quiz.html %}

<div class="extended-explanation">

Een geheel getal optellen verschuift de datum dat aantal dagen vooruit, waarbij automatisch naar de volgende maand wordt doorgerold. Vijf dagen na 28 januari 2026 komt uit op 2 februari — de resterende drie dagen van januari (29, 30, 31) plus nog twee.

</div>

{% include nav.html %}
