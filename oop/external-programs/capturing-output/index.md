---
title: Capturing output
---

{% include menu.html %}

To read what an external program prints rather than letting it go to the screen, pass `:out` when launching it. The returned `Proc` then has an `.out` handle you can read from:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` redirects the program’s standard output into the `Proc`. The `.out` handle works like the file handles from the previous section, and `.slurp` reads everything from it at once. The `:close` adverb is a handy shortcut: after reading, it closes the handle for you — the same tidy-up you did explicitly with `.close` on a file handle — so nothing is left open. Finally, `.chomp` removes the trailing newline that `echo` adds.

The same works with `shell`, which is handy for capturing the result of a pipeline:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

You can capture the error stream too, with `:err` and the matching `.err` handle. Passing both `:out` and `:err` keeps the two streams apart, each in its own handle, so you can read them separately:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Here, the shell command prints one line to standard output and one to standard error (`>&2` redirects to it). Because we asked for both streams, `.out` and `.err` hold them independently — the program’s normal output never gets mixed up with its diagnostics.

Capturing output is how you use an external program as a building block — run it, read its result, and carry on with that data in your own program.

{% include nav.html %}
