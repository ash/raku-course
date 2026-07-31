---
title: Quiz — gather e take
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

Il `take` gira solo quando `$_ > 3`, quindi all'elenco vengono aggiunti solo `4` e `5`. Tutto il resto viene saltato, dando `[4 5]`.

</div>

{% include nav.html %}
