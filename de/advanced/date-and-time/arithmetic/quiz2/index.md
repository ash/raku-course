---
title: Quiz — Monate addieren
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Ein Monat nach dem 31. Januar wäre der "31. Februar", der nicht existiert. `later` begrenzt das Ergebnis auf den letzten gültigen Tag des Zielmonats, sodass es auf den 28. Februar 2026 fällt (2026 ist kein Schaltjahr, daher hat der Februar 28 Tage).

</div>

{% include nav.html %}
