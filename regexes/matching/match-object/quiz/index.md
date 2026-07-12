---
title: 'Quiz — Matching'
---

{% include menu.html %}

What does the following program print?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

The match `cd` begins at index `2` (the characters are numbered `a`=0, `b`=1, `c`=2). The `.from` method returns that starting position, not the matched text.

</div>

{% include nav.html %}
