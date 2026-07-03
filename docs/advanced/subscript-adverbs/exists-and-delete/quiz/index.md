---
title: 'Quiz — Subscript adverbs'
---

{% include menu.html %}

What does the following program print?

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

{:.quiz}
0 | True
1 | False
0 | Nil
0 | (Any)

{% include quiz.html %}

<div class="extended-explanation">

The `:exists` adverb asks whether the key is present and returns a Boolean. There is no `z` key in the hash, so the answer is `False`.

</div>

{% include nav.html %}
