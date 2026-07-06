---
title: The solution of ’Pass a handle to a function‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 You can find the source code in the file [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Output

```
started
working
done
```

## Comments

1. The handle returned by `open` is just a value held in `$fh`, so it can be passed to `log-line` as an argument like any string or number. Inside the subroutine, `$fh.say` writes through that same open handle.

1. Because the handle stays open across all three calls, each `log-line` appends another line to the same file. `close` then flushes everything, and `slurp` reads the three lines back.

1. This is what makes handles composable: a function can accept a handle and write to (or read from) it without caring which file it points at — the caller decides that when it opens the file.

{% include nav.html %}
