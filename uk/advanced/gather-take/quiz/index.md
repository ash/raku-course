---
title: 'Тест — `gather`'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

`gather` збирає лише ті значення, для яких справді викликано `take`. Умова `$_ %% 3` істинна тільки для `3` та `6`, тож беруться лише ці два, даючи `[3 6]`.

</div>

{% include nav.html %}
