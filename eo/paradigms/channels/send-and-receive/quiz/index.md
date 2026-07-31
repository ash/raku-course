---
title: Kvizo — Kanaloj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $c = Channel.new;
$c.send(10);
$c.send(20);
say $c.receive;
```

{:.quiz}
1 | 10
0 | 20
0 | 30
0 | (10 20)

{% include quiz.html %}

<div class="extended-explanation">

Kanalo estas vico laŭ la principo unue-enen-unue-eksteren. `10` estis sendita unue, do la unua `.receive` redonas `10`.

</div>

{% include nav.html %}
