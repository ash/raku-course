---
title: Quiz — Maanden optellen
---

{% include menu.html %}

Wat print het volgende programma?

```raku
say Date.new(2026, 1, 31).later(:months(1));
```

{:.quiz}
1 | 2026-02-28
0 | 2026-03-03
0 | 2026-02-31
0 | 2026-03-31

{% include quiz.html %}

<div class="extended-explanation">

Eén maand na 31 januari zou "31 februari" zijn, wat niet bestaat. `later` klempt het resultaat vast op de laatste geldige dag van de doelmaand, dus het komt uit op 28 februari 2026 (2026 is geen schrikkeljaar, dus februari heeft 28 dagen).

</div>

{% include nav.html %}
