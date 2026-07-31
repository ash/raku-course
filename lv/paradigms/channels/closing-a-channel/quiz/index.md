---
title: Viktorīna — Kanāla aizvēršana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | tā gaida mūžīgi

{% include quiz.html %}

<div class="extended-explanation">

`.list` savāc katru kanālā vēl esošo vērtību un beidzas, jo kanāls ir aizvērts. Tika nosūtītas divas vērtības, tāpēc `.elems` ir `2`. Bez `.close` metode `.list` gaidītu mūžīgi.

</div>

{% include nav.html %}
