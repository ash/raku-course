---
title: 'Kvizo — `gather`'
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my @r = gather for 1..6 {
    take $_ if $_ %% 3;
};

say @r;
```

{:.quiz}
1 | [3 6]
0 | [1 2 3 4 5 6]
0 | [3]
0 | []

{% include quiz.html %}

<div class="extended-explanation">

`gather` kolektas nur la valorojn, sur kiuj `take` estas efektive vokata. La kondiĉo `$_ %% 3` estas vera nur por `3` kaj `6`, do nur tiuj du estas prenataj, donante `[3 6]`.

</div>

{% include nav.html %}
