---
title: Viktorīna — await
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`await` nogaida viena solījuma beigas un atgriež tā rezultātu. Bloks aprēķina `8 * 8`, tāpēc `await $p` ir `64`.

</div>

{% include nav.html %}
