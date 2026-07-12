---
title: 'Quiz — What is a grammar'
---

{% include menu.html %}

What does the following program print?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

The named token `greet` matches the literal text `hi`. Calling it as `<greet>` inside the pattern looks for that text, which is present at the start of `'hi there'`, so the match succeeds and `so` returns `True`.

</div>

{% include nav.html %}
