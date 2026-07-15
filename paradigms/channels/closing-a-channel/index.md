---
title: Closing a channel
---

{% include menu.html %}

When a producer has no more values to send, it calls `.close` on the channel. Closing signals to the consumer that the stream has ended.

The most convenient way to consume a closed channel is `.list`, which gives you every remaining value and finishes once the channel is closed:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Because `.list` waits for the channel to be closed, it is perfect for “collect everything the producer sends”. You can treat the result like any other list — sum it, count it, and so on:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Closing is how a consumer knows when to stop. Without it, `.list` (or a loop of `.receive`) would wait forever for a value that never comes. Always close a channel when the sending is done.

{% include nav.html %}
