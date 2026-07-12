---
title: 'Quiz — Positional captures'
---

{% include menu.html %}

What does the following program print?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

The two pairs of brackets capture into `$0` and `$1`, numbered from zero. The first captures `ab`, the second captures `cd`, so `$1` is `｢cd｣`.

</div>

{% include nav.html %}
