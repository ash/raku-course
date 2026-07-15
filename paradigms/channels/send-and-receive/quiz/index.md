---
title: 'Quiz — Channels'
---

{% include menu.html %}

What does the following program print?

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

A channel is a first-in, first-out queue. `10` was sent first, so the first `.receive` returns `10`.

</div>

{% include nav.html %}
