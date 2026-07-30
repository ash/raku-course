---
title: "Quiz — Lambda's"
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Het pointy block is een lambda die haar argument bij zichzelf optelt. Aangeroepen met `9` geeft ze `9 + 9` terug, dat wil zeggen `18`.

</div>

{% include nav.html %}
