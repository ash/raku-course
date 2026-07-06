---
title: Appending to a file
---

{% include menu.html %}

By default, `spurt` replaces whatever was in the file. To add to the end of an existing file instead, pass the `:append` named argument:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

The second `spurt` keeps the existing content and adds the new line after it, so the file ends up with both lines:

```
line1
line2
```

Without `:append`, the second call would have overwritten the file, leaving only `line2`. Appending is useful for things like log files, where each run of a program adds to a growing record rather than starting over.

{% include nav.html %}
