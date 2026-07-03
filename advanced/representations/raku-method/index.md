---
title: The `.raku` method
---

{% include menu.html %}

The third representation method, `.raku`, returns a string with a **code-like** representation of the value — ideally, a string that you could paste back into a program to recreate the same value. Every value in Raku has it.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Notice how the string `'Raku'` comes back with the quotes around it, so you can tell a number from a string at a glance — exactly the kind of detail you want while debugging.

The method also works for compound data, including nested structures:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Because `.raku` returns an ordinary string, you can use it anywhere a string is expected, for example inside an interpolated message:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Use `.raku` whenever you want that code-like representation as a string to combine with your own messages. Very soon we’ll introduce `dd`, a Rakudo tool that prints the same kind of representation for you in one step.

{% include nav.html %}
