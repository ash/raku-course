---
title: 'Quiz — Ignorecase'
---

{% include menu.html %}

What does the following program print? The pattern is upper-case and the text is mixed-case.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The `:i` adverb turns off the upper/lower-case distinction, and it works in either direction — here the upper-case pattern `HELLO` matches the mixed-case text. The result is the matched text as it appears in the string, `｢Hello｣`.

</div>

{% include nav.html %}
