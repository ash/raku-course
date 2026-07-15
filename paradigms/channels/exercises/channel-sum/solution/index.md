---
title: The solution of ’Sum a channel‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 You can find the source code in the file [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Output

```
21
```

## Comments

1. The producer promise sends the six values on one thread and closes the channel. The consumer promise, on another thread, uses `.list` to collect everything up to the close and returns the sum (`[+]` adds `1 + 2 + … + 6`).

1. `await $producer, $consumer` waits for **both** promises and returns their results in order. The producer's result is not needed here (`$sent`); the consumer's is the sum, `21`. The channel is what safely carries the values from the producer thread to the consumer thread.

{% include nav.html %}
