---
title: The solution of ’Drain a channel‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 You can find the source code in the file [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Output

```
a,b
```

## Comments

1. `.list` drains every value left in the closed channel, in order.

1. `.join(',')` glues the two strings together with a comma between them.

{% include nav.html %}
