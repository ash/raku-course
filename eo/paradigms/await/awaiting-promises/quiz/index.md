---
title: Kvizo — await
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

`await` atendas, ke la unu sola promeso finiĝu, kaj redonas ĝian rezulton. La bloko kalkulas `8 * 8`, do `await $p` estas `64`.

</div>

{% include nav.html %}
