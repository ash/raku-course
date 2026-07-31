---
title: Quiz — gather et take
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

`take` solum tunc currit cum `$_ > 3`, itaque soli `4` et `5` indici adduntur. Cetera omnia praetereuntur, dans `[4 5]`.

</div>

{% include nav.html %}
