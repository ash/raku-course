---
title: Escaping special characters in Raku strings
---

{% include menu.html %}

Imagine you want to print a price label and you have both the name of the product and its price in scalar variables?

    my $product = 'Electricity';
    my $price = 3.14;

How do you print the label if the price is meant to be in dollars? This is what is expected to be output: `Electricity costs $3.14`. A dollar sign in a double-quoted strings is an indicator of a variable to be interpolated. To print the `$` character itself, you need to escape it:

    say "$product costs \$$price";

Of course, you can use string concatenation and avoid escaping `$`:

    say $product ~ ' costs $' ~ $price;

This variant prints exactly the same string, but in general strings with interpolated variables look more natural and easy to read. But what is important here is that as you see, the `$` was neither interpolated nor escaped in a string in single quotes: `' costs $'`. That’s tha main difference. Special characters in single quotes appear as-is.

Here is a few more special characters that have special meaning in double-quoted strings:

`\$` | Dollar sign
`\n` | New line
`\r` | Carriage return
`\t` | Horizontal tab
`\"` | Double quote
`\\` | Backslash

The way you quote the string defines how special characters are interpreted. Consider these two examples:

    say 'One\nTwo';
    say "Three\nFour";

If you run this program, you will see that the first string appears as is on a single line. The second string was split into two pieces:

    One\nTwo
    Three
    Four

In double quotes, a special sequence `\n` was processed as a newline character, while in a string in single quotes it was a regular sequence of two characters: `\` and `n`.

{% include nav.html %}
