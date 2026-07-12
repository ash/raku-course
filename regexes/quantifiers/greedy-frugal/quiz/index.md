---
title: 'Quiz — Quantifiers'
---

{% include menu.html %}

What does the following program print?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The quantifier `** 2..3` allows two or three repetitions and, being greedy, takes as many as it can — three. The fourth `a` is left unmatched.

</div>

{% include nav.html %}
