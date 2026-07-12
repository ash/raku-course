---
title: Literals and character classes
---

{% include menu.html %}

A _regex_ (short for _regular expression_) is a pattern that describes a piece of text. With a regex you can ask questions such as “does this string contain a number?” or “does this word start with a capital letter?”, and you can pull pieces out of a string or change them.

Raku has especially powerful and readable regexes, and they are built right into the language. The simplest way to write one is between two slashes:

```raku
/cat/
```

This pattern matches the three letters `c`, `a`, `t` in a row. To test a string against a pattern, use the smartmatch operator `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

When the pattern is found, Raku reports the part of the string that matched, shown between the corner brackets `｢ ｣`. You will look at this result more closely in the next section.

In this first section you will learn how to match exact (_literal_) text, and how to match a character that may be one of several — a _character class_. The following sections then add [quantifiers](/regexes/quantifiers), [captures](/regexes/captures), and everything else that makes regexes so useful.

{% include nav.html %}
