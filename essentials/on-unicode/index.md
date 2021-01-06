---
title: Notes on using Unicode
---

{% include menu.html %}

Raku assumes that all your program files are saved as UTF-8 files. From the practical point of view, that means that you don’t have to worry about non-ASCII characters in, for example, string literals. But that’s not only that. You most likely will not need to worry if your program reads a text file that is also a UTF-8 file. It also means that string length is correctly detected as the number of characters and not the number of bytes. (We will have a more detailed look into it later.) 

The next thing you want to know is that you can use non-Latin or non-English letters for identifiers. You can name your variable `$ι` instead of `$i` if you prefer, and the compiler will parse it correctly.

Raku treats the Unicode properties of the characters pedantically enough. For example, it not only knows if a character is a letter or a digit, but also correctly identifies pair characters such as parentheses or different kind of brackets. In many cases, you can choose a different type of brackets for separate parts of the program. For instance, you can use modify our ‘Hello, World!’ program to use these fancy quoting characters:

```raku
say ｢Hello, World!｣;
```

Some built-in operators have two forms: a Unicode and an ASCII versions. For example, one can type a negated comparison as `!=` or as `≠`. The same applies to set operations: for instance, `∈` has a pure ASCII equivalent `(elem)`. Or, there is a built-in constant which you can refer to as `pi` or `π`.

When working with numbers, you can choose to use fractions in the form of `½` instead of `0.5`. Or, evaluating the square of `$x` as `$x²` using a superscript character.

Find the full list of such pairs at the following documentation page: 📖 [Unicode versus ASCII symbols](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}
