---
title: Escaping special characters in Raku strings
---

{% include menu.html %}

Imagine you want to print a price label, and you keep both the name of the product and its price in scalar variables?

```raku
my $product = 'Electricity';
my $price = 3.14;
```

How do you print the label if the price is meant to be in dollars? The expected output is: `Electricity costs $3.14`. A dollar sign in double-quoted strings is an indicator of a variable to be interpolated. To print the `$` character itself, you need to escape it:

```raku
say "$product costs \$$price";
```

Of course, you can use string concatenation and avoid escaping `$`:

```raku
say $product ~ ' costs $' ~ $price;
```

This variant prints exactly the same string, but interpolation look more natural and easier to read. Note that the `$` character was neither interpolated nor escaped in a single-quoted string: `' costs $'`. That’s the main difference. Special characters in single quotes appear as-is.

Here is a few more special characters that have special meaning in double-quoted strings:

`\$` | Dollar sign
`\n` | Newline
`\r` | Carriage return
`\t` | Horizontal tab
`\"` | Double quote
`\\` | Backslash

The way you quote the string defines how Raku treats special characters. Consider these two examples:

```raku
say 'One\nTwo';
say "Three\nFour";
```

If you run this program, you will see that the first string appears as is on a single line. The second string was split into two pieces:

    One\nTwo
    Three
    Four

In double quotes, a special sequence `\n` was processed as a newline character, while in a string in single quotes it was a regular sequence of two characters: `\` and `n`.

There’s an interesting exception for `'` and `\`. In single quotes, you can escape a single quote by prefixing it with another `\`:

```raku
say '\''; # '
```

A backslash also has to be escaped if a single quote follows it:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}
