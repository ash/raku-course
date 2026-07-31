---
title: Quiz — await
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` unum promissum finire exspectat et effectum eius reddit. Blocus `8 * 8` computat, itaque `await $p` est `64`.

</div>

{% include nav.html %}
