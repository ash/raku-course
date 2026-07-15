---
title: The solution of ’Count the emissions‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 You can find the source code in the file [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Output

```
5
```

## Comments

1. The tap runs once per emitted value, whatever the values are.

1. Incrementing `$count` each time gives the total number of values, `5`.

{% include nav.html %}
