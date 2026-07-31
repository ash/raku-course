---
title: Viktorīna — Solījumu apvienošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` atgriež abu solījumu rezultātus pēc kārtas, `(2, 3)`. Redukcijas metaoperators `[*]` tos sareizina, dodot `6`.

</div>

{% include nav.html %}
