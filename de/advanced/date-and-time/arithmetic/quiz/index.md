---
title: Quiz — Datumsarithmetik
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Das Addieren einer ganzen Zahl verschiebt das Datum um diese Anzahl von Tagen nach vorne und wechselt dabei automatisch in den nächsten Monat. Fuenf Tage nach dem 28. Januar 2026 landen auf dem 2. Februar — die verbleibenden drei Tage des Januars (29., 30., 31.) plus zwei weitere.

</div>

{% include nav.html %}
