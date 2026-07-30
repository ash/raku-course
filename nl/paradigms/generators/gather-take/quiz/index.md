---
title: 'Quiz — gather en take'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De `take` draait alleen wanneer `$_ > 3`, dus worden alleen `4` en `5` aan de lijst toegevoegd. Al het andere wordt overgeslagen, wat `[4 5]` geeft.

</div>

{% include nav.html %}
