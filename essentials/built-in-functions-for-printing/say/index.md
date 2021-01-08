---
title: The say routine
---

{% include menu.html %}

The `say` built-in routine does the following actions:

1. Calls the `gist` method on its arguments.
1. Adds a newline character.
1. Converts the result to UTF-8.
1. Sends it to the `STDOUT` stream.

From the user perspective, `say` simply prints the contents of a variable to the terminal and adds the newline.

The first step requires some explanations. The `gist` method is a method that is defined for every built-in data type, such as integers or strings. For such simple types, the return result is a human-readable value that represents the item.

```raku
say 42; # 42
say 'Raku'; # Raku
```

For more complex data, such as arrays or hashes, the `gist` method adds some formatting.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

The `say` routine can be called as both a function or a method:

```raku
say 42;
say(42);
42.say;
```

You can pass more than one argument to `say`. The output pieces are joint with no spaces between them.

```raku
say(100, 500); # 100500
```

{% include nav.html %}
