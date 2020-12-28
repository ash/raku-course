---
title: while
---

{% include menu.html %}

The `while` construct has a Boolean condition and a code block. The code block is executed repeatedly _while_ the condition is `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Enter a number: ';
    say "You entered $x, which is not bigger than 10.";
}
say "$x is bigger than 10.";
```

In the loop, the program asks to enter a number, and if the number is not bigger than 10, the loop body repeats. As soon as the entered number breaks the condition `$x <= 10`, the loop ends, and the next line of the program is executed.

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

{% include nav.html %}
