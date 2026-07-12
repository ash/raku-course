---
title: The smartmatch operator
---

{% include menu.html %}

The operator that applies a regex to a string is the smartmatch `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

A pattern written between slashes is the most common form, but there are two more that mean the same thing and are sometimes clearer:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

The `m/.../` form emphasises that you are _matching_, and is handy when you want to add options to the match (you will meet those options, called [_adverbs_](/regexes/adverbs), later). The `rx/.../` form constructs a regex value without matching it yet.

Very often you only care whether the string matched, not what exactly was found. Because a successful match is a true value and a failed match is false, you can use the result directly in a Boolean context. The cleanest way to get a plain `True` or `False` is the `so` function:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

This makes a regex a natural condition for `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
