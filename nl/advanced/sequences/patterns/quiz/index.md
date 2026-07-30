---
title: Quiz — De `...`-operator
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

Met *drie* startwaarden kijkt `...` naar de verhouding ertussen: `1, 3, 9` worden telkens verdrievoudigd, dus de reeks gaat meetkundig verder als `27, 81`. (Twee startwaarden zouden in plaats daarvan een rekenkundige stap instellen.)

</div>

{% include nav.html %}
