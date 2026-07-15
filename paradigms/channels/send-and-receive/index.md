---
title: Sending and receiving
---

{% include menu.html %}

Create a channel with `Channel.new`. Put values in with `.send`, and take them out with `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

A channel is a **queue**: values come out in the same order they went in — first in, first out. So the first `.receive` returns `1`, the value sent first.

The point of a channel is that sending and receiving are safe to do from **different threads** at the same time. A producer can keep sending while a consumer keeps receiving, and Raku makes sure no value is lost or duplicated:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Here a background task sends `1, 2, 3`; the main program receives. `.receive` waits if the channel is momentarily empty, so the consumer never races ahead of the producer.

{% include nav.html %}
