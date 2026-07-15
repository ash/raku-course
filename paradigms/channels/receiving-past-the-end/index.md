---
title: Receiving past the end
---

{% include menu.html %}

What happens if you call `.receive` more times than there are values to take? The answer depends on whether the channel has been **closed**.

Take the producer–consumer example from earlier: a background task sends three values and closes the channel. What if the consumer asks for a fourth?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # one receive too many
```

## On a closed channel, an extra receive throws

Closing does not throw away the values already queued — the three `.receive` calls above still return `1`, `2`, and `3`. But once the channel is closed **and** empty, no more values can ever arrive, so rather than let you wait forever, Raku raises an exception:

```
Cannot receive a message on a closed channel
```

The exception is `X::Channel::ReceiveOnClosed`. This is helpful rather than annoying: it tells the consumer, unmistakably, that it has drained the channel. In practice you avoid ever hitting it by consuming with `.list` (which stops cleanly at the close) or by looping only while values remain — both shown on the previous page.

## On an open channel, an extra receive blocks

If the producer never closes the channel, `.receive` has no way to know whether another value is still coming, so it simply **waits**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # waits here — the channel is open but empty
```

The program hangs at the second `.receive`, because a value *might* still be sent. This is the danger the previous page warned about: forget to `.close`, and a normal “wait for the next value” becomes a wait that never ends.

So the two outcomes are opposite, in a useful way. A **closed** channel fails fast when it is empty — you get an exception you can see and catch. An **open** channel keeps waiting — exactly right while a producer is still at work, but a silent hang if the producer has quietly stopped without closing. Closing the channel is precisely what turns that silent hang into a clear signal that the stream has ended.

{% include nav.html %}
