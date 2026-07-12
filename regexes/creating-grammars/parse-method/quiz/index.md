---
title: 'Quiz — Creating grammars'
---

{% include menu.html %}

What does the following program print?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` succeeds only when the grammar matches the **whole** string. `\w+` matches `hello`, but then a space and `world` are left over, so the input is not fully consumed: `.parse` returns `Nil` and `.defined` is `False`.

</div>

{% include nav.html %}
