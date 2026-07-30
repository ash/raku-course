---
title: Quiz — `gather`
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`gather` sammelt nur die Werte, für die `take` tatsächlich aufgerufen wird. Die Bedingung `$_ %% 3` ist nur für `3` und `6` wahr, sodass nur diese beiden genommen werden, was `[3 6]` ergibt.

</div>

{% include nav.html %}
