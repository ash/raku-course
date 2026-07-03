---
title: The solution of ’Override the dynamic‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 You can find the source code in the file [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Output

```
INFO: working
DEBUG: working
```

## Comments

1. `task` calls `log-it` but never mentions `$*prefix`. The value still reaches `log-it`, because dynamic lookup follows the call stack outward — past `task` — to whoever is on the stack at the time.

1. The two blocks set different values, so the *same* `task()` call produces a different prefix each time. This is what makes dynamic variables useful: context flows into deeply nested code without being threaded through every intermediate routine as an argument.

{% include nav.html %}
