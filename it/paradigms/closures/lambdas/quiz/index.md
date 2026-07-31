---
title: Quiz — Lambda
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Il blocco con la freccia è una lambda che somma il proprio argomento a se stesso. Chiamata con `9`, restituisce `9 + 9`, cioè `18`.

</div>

{% include nav.html %}
