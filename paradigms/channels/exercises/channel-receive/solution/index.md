---
title: The solution of ’Receive a value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 You can find the source code in the file [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Output

```
a
```

## Comments

1. A channel returns values in the order they were sent.

1. `'a'` was sent first, so the first `.receive` returns it.

{% include nav.html %}
