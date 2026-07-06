---
title: File handles
---

{% include menu.html %}

Reading or writing a whole file at once is convenient, but sometimes you want to go through a file one line at a time, or keep a file open while you write to it repeatedly. For that you use a _file handle_.

The simplest way to read a file line by line does not even need an explicit handle: the `lines` method on a path object gives the lines one at a time, ready for a `for` loop:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Each `$line` is a single line, without its trailing newline. The program prints:

```
ONE
TWO
THREE
```

To write to a file through a handle, open it with `open` and the `:w` (write) flag, use the handle’s `say` or `print` methods, and `close` it when done:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Closing the handle makes sure everything you wrote is flushed to disk. Reading line by line, as above, is the usual way to handle files that are too large to slurp into memory all at once.

{% include nav.html %}
