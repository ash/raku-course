---
title: Quiz — Promissa
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` blocum in fundo currit et promissum reddit. `await` illud exspectat et effectum bloci reddit, `100 / 4`, qui est `25`.

</div>

{% include nav.html %}
