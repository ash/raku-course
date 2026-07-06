---
title: The Proc object
---

{% include menu.html %}

Every call to `run` or `shell` hands back a `Proc` object — a small record describing the program that ran and how it finished. The earlier topics used its `.out` handle to read output; the `Proc` carries more than that.

The most useful part is the **exit code**. A program tells whoever launched it whether it succeeded with a small integer: `0` means success, and any other number is a failure code of the program’s own choosing. `.exitcode` gives you that number:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

For the usual yes/no question — did it work? — a `Proc` is simply true when the exit code is `0` and false otherwise, so you can test it directly:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

A `Proc` also remembers the command it launched, in `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

One thing to watch for: if a command fails and you simply **ignore** the returned `Proc`, Raku raises an exception rather than letting the failure pass unnoticed:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Because a non-zero exit usually means something went wrong, a failing `Proc` that is thrown away throws when it goes out of scope. The trigger is *discarding* the result, not ignoring the exit code: simply storing the `Proc` in a variable is enough to avoid the exception, even if you never look at it again.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

So if you *expect* a command might fail, keep its `Proc` and then look at `.exitcode` (or test it as a Boolean) whenever you want to know what happened.

{% include nav.html %}
