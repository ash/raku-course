---
title: until
---

{% include menu.html %}

The `until` construct is opposite to `while`. It executes the block of code until the condition becomes `True` (or, in other words, while it is `False`).

Here is a modified [program from the previous page](../while) that uses `until` and a new condition:

    my $x = 0;
    until $x > 10 {
        $x = prompt 'Enter a number: ';
        say "You entered $x, which is not bigger than 10.";
    }
    say "$x is bigger than 10.";

Run the program and check the output:

    $ raku t.raku 
    Enter a number: 10
    You entered 10, which is not bigger than 10.
    Enter a number: 4
    You entered 4, which is not bigger than 10.
    Enter a number: 1
    You entered 1, which is not bigger than 10.
    Enter a number: 20
    You entered 20, which is not bigger than 10.
    20 is bigger than 10.

## `until` vs. `while`

Compare the equivalent programs with `while` and `until`:

    while $x <= 10 { . . . }

    until $x > 10 { . . . }

As you see, the conditions are simply negated versions of each other. In this sense, `while` and `until` are in the same relations as `if` and `unless`.

{% include nav.html %}
