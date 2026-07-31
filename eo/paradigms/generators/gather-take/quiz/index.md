---
title: Kvizo — gather kaj take
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

La `take` plenumiĝas nur kiam `$_ > 3`, do nur `4` kaj `5` estas aldonataj al la listo. Ĉio alia estas preterpasata, donante `[4 5]`.

</div>

{% include nav.html %}
