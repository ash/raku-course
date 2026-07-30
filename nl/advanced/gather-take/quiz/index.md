---
title: Quiz — `gather`
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`gather` verzamelt alleen de waarden waarvoor `take` daadwerkelijk wordt aangeroepen. De voorwaarde `$_ %% 3` is alleen waar voor `3` en `6`, dus alleen die twee worden genomen, wat `[3 6]` oplevert.

</div>

{% include nav.html %}
