---
title: Start and end of string
---

{% include menu.html %}

Two anchors mark the ends of the string:

* `^` matches at the very **start** of the string
* `$` matches at the very **end**

Use `^` to require that the match begins at the start:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

The second string contains `http`, but not at the beginning, so the anchored pattern fails.

Putting `^` and `$` around a pattern forces it to match the **whole** string, with nothing left over on either side:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

This is a very common idiom for validation — “is this string exactly a number?”, for instance:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Line anchors

When a string has several lines, the partners `^^` and `$$` match at the start and end of **each line** rather than the whole string. The difference from `^` and `$` shows up as soon as the text you want is not on the first line: the single anchors see only the whole string and fail, while the doubled ones match on any line.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Here `\n` starts a second line. The `^^` requires `dog` to sit at the start of a line and `$$` at the end of one; both hold on the second line, so the doubled anchors succeed where the single ones cannot.

{% include nav.html %}
