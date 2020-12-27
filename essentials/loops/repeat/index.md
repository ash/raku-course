---
title: Using repeat
---

{% include menu.html %}

The `while` and `until` blocks may be never executed if the condition was initially `False`. In contrast, the `repeat` block will be executed at least once. The condition to stop repetition is checked after the code block with either `while` or `until`.

Consider this program.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

The `$x` variable is initially set to `100`, and the `while` condition is checking whether `$x` is less then or equals to `10`. With the given value of the variable, the condition is already `False`, but the code block is still executed first.

    $ raku t.raku
    Enter a number: 10
    You entered 10.
    Enter a number: 20
    You entered 20.
    20 is bigger than 10.

Let us modify the program so that it uses `until` instead.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Run it to confirm it works as expected:

    $ raku t.raku
    Enter a number: 5
    You entered 5.
    Enter a number: 15
    You entered 15.
    15 is bigger than 10.

{% include nav.html %}
