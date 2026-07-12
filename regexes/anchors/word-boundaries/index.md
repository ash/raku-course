---
title: Word boundaries
---

{% include menu.html %}

Matching `cat` succeeds inside `category`, because the three letters really are there. Often that is not what you want — you mean the whole word `cat`. A _word boundary_ anchor solves this.

* `<<` matches at the **left** edge of a word (the start of a word)
* `>>` matches at the **right** edge of a word (the end of a word)

Wrap a word in these anchors to match it only as a complete word:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

In `category` there is no word boundary right after `cat`, so the anchored pattern fails — exactly the behaviour we wanted.

A word boundary sits between a word character (`\w`) and a non-word character, so it does not consume anything itself; like `^` and `$`, it only asserts a position.

The two anchors can also be written with the guillemet characters `«` and `»` if you prefer them. They behave exactly like `<<` and `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
