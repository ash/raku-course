---
title: 'Quiz — Closing a channel'
---

{% include menu.html %}

What does the following program print?

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
0 | it waits forever

{% include quiz.html %}

<div class="extended-explanation">

`.list` collects every value still in the channel and finishes because the channel is closed. Two values were sent, so `.elems` is `2`. Without the `.close`, `.list` would wait forever.

</div>

{% include nav.html %}
