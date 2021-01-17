---
title: while
---

{% include menu.html %}

The `while` construct has a Boolean condition and a code block. Raku executes the code block repeatedly _while_ the condition is `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Enter a number, which is not bigger than 10: ';
    say "You entered $x.";
}
say "$x is bigger than 10.";
```

The program asks to enter a number, and if the number is not bigger than 10, the loop body repeats. As soon as the entered number breaks the condition `$x <= 10`, the loop ends, and the next line of the program is executed.

```console
$ raku t.raku
Enter a number, which is not bigger than 10: 10
You entered 10.
Enter a number, which is not bigger than 10: 4
You entered 4.
Enter a number, which is not bigger than 10: 1
You entered 1.
Enter a number, which is not bigger than 10: 20
You entered 20.
20 is bigger than 10.
```

{% include nav.html %}
