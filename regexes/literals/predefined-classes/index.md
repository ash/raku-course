---
title: Predefined character classes
---

{% include menu.html %}

Some character classes are so common that Raku gives them short names. You write them with a backslash:

* `\d` — a digit
* `\w` — a “word” character: a letter, a digit, or an underscore
* `\s` — a whitespace character (space, tab, newline)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Each of these has an upper-case partner that matches the **opposite** set:

* `\D` — anything that is not a digit
* `\W` — anything that is not a word character
* `\S` — anything that is not whitespace

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Finally, a single dot `.` matches **any** character at all:

```raku
say 'abc' ~~ /./; # ｢a｣
```

These predefined classes save a lot of typing, and you will use them constantly in the rest of this part.

{% include nav.html %}
