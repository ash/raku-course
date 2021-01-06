---
title: Single-line comments
---

{% include menu.html %}

The simplest form of a comment is a one-line comment. It starts by the `#` character and goes until the end of the current line.

```raku
my $name; # This variable is used to keep user’s name
$name = prompt 'What is your name? ';
say $name; # We see the name now
```

Notice that a sheebang such as `#!/usr/bin/env raku` in the first line of code is also a comment for Raku, while it can be read and executed by the shell.

{% include nav.html %}
