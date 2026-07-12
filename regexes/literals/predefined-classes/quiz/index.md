---
title: 'Quiz — Character classes'
---

{% include menu.html %}

What does the following program print?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

The class `\W` matches the first character that is **not** a letter, digit, or underscore. The characters `a`, `_`, and `1` are all word characters, so the first non-word character is the space.

</div>

{% include nav.html %}
