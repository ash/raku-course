---
title: Viktorīna — gather un take
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`take` izpildās tikai tad, kad `$_ > 3`, tāpēc sarakstam tiek pievienoti vienīgi `4` un `5`. Viss pārējais tiek izlaists, dodot `[4 5]`.

</div>

{% include nav.html %}
