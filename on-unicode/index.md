---
title: Notes on using Unicode
---

[Start](../) / [Part 1](../part1)

# Notes on using Unicode

Raku assumes that all your program files are saved as UTF-8 files. From the practical point of view, that means that you don’t have to worry about non-ASCII characters in, for example, string variables. But that’s not only that. You most likely will not need to worry if your program reads a text file that is also a UTF-8 file. It also means that string length is correctly detected as the number of characters and not the nubmer of bytes. (We will have a more detailed look into it later.) 

The next thing you want to know is that you can also use non-Latin or non-English letters for identifiers. You can name your variable `$ι` instead of `$i` if you prefer, and the compiler will parse it correctly.

Raku treats the Unicode properties of the characters very pedantically, for example, it understands not only the letters or digits from other non-Latin scripts, but also corretly identifies pair characters such as parentheses or different kind of brackets. In many cases, you can choose different type of brackets for separate parts of the program. For instanse, you can use modify our ‘Hello, World!’ proram to use these fancy characters:

    say ｢Hello, World!｣;

A number of built-in operators have two forms: a Unicode and ASCII versions. For example, a negated comparison can be typed as `!=` or as `≠`. The same with set operations, for example, for `∈`, there is a pure ASCII equivalent `(elem)`. Or, there is a built-in constant which you can refer to as `pi` or `π`.

When working with numbers, you can choose to use fractions in the form of `½` instead of `0.5`. Or, evaluating the square of `$x` as `$x²` using a superscript character.

Find the full list of such pairs on the following documentation page: 📖 [Unicode versus ASCII symbols](https://docs.raku.org/language/unicode_ascii).

## Course navigation

← [Hello, World!](../hello-world) | [Running programs](../running-programs) →
