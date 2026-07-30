---
title: 'Quiz — De reeksoperator'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

Uit `3, 6` leidt de operator een stap van `+3` af en gaat hij door tot hij het eindpunt `15` bereikt: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
