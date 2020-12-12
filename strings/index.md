---
title: Strings in Raku
---

# Strings

Let’s talk about strings. We already used strings in a number of previous programs. All of them are also called string literals. A string literal is some text in quotes:

    say 'I am a string literal';

The way you quote the string defines how special characters are interpreted. Consider these two examples:

    say 'One\nTwo';
    say "Three\nFour";

If you run this program, you will see that the first string appears as is on a single line. The second string was split into two pieces:

    One\nTwo
    Three
    Four

In double quotes, a special sequence `\n` was processed as a newline character, while in a string in single quotes it was a regular sequence of two characters: `\` and `n`.

## Assignment