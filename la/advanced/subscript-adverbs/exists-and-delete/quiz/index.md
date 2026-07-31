---
title: Quiz — Subscripti adverbia
---

{% include menu.html %}

Quid sequens programma imprimit?

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

Adverbium `:exists` quaerit num clavis praesens sit et valorem Booleanum reddit. Nulla clavis `z` in tabula est, ergo responsio est `False`.

</div>

{% include nav.html %}
