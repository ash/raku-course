---
title: 'Quiz — Named regexes'
---

{% include menu.html %}

What does the following program print?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Calling a named regex as `<letter>` both matches it and captures the result under that name. The pattern finds the first lowercase letter, `a`, so `$<letter>` is `｢a｣`.

</div>

{% include nav.html %}
