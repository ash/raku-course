---
title: 'Quiz — Captures'
---

{% include menu.html %}

What does the following program print?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

The greedy `\w+` matches word characters as far as it can while still leaving at least one digit for `\d+`. It takes `ab1`, and `\d+` then matches the single remaining digit `2`. So `$0` is `ab1` and `$1` is `2`.

</div>

{% include nav.html %}
