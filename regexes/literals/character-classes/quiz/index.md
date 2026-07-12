---
title: 'Quiz — Custom classes'
---

{% include menu.html %}

What does the following program print? The class is a **negated** one.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The class `<-[a..z]>` matches a single character that is **not** a lowercase letter. Scanning `abc123` from the left, the first three characters are lowercase letters and are skipped; the first character that is not a lowercase letter is the digit `1`, so the match is `｢1｣`.

</div>

{% include nav.html %}
