---
title: The solution of ’Write with a handle‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 You can find the source code in the file [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Output

```
1
2
3
```

## Comments

1. `open` with the `:w` flag gives a handle for writing. The handle stays open across the loop, so each `$fh.say` adds another line — this is the advantage of a handle over `spurt`, which would reopen the file every time.

1. `close` flushes the data to disk, so the following `slurp` reads back all three lines.

{% include nav.html %}
