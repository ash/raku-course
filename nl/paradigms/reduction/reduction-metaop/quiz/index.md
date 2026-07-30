---
title: 'Quiz — De reductiemeta-operator'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` reduceert de lijst met de operator `min`, vergelijkt de elementen paarsgewijs en houdt het kleinste. Het kleinste van `8, 3, 5, 1` is `1`.

</div>

{% include nav.html %}
