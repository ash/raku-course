---
title: 'Quiz — Basic quantifiers'
---

{% include menu.html %}

What does the following program print? Note the `*` quantifier on the `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` means “zero or more”, so `a*` is happy to match no `a` at all. In `br` there is no `a` between the `b` and the `r`, but the pattern still matches because zero repetitions are allowed, giving `｢br｣`.

</div>

{% include nav.html %}
