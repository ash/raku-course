---
title: Quiz — Arithmetica dierum
---

{% include menu.html %}

Quid hoc programma imprimit?

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

Addendo numerum integrum diem promovet tot diebus, automatice in mensem proximum transiens. Quinque dies post 28 Ianuarii 2026 cadit in 2 Februarii — tres dies reliqui Ianuarii (29, 30, 31) plus duo amplius.

</div>

{% include nav.html %}
