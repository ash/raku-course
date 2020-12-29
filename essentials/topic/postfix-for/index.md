---
title: 'Postfix form of "for"'
---

{% include menu.html %}

With a short loop body, the `for` loop can be written in a postfix form:

```raku
.say for 1..5;
```

This program is equivalent to a more traditional variant:

```raku
for 1..5 -> $n {
    say $n;
}
```

Or, if the default loop variable is used, to:

```raku
for 1..5 {
    .say;
}
```

Here, `.say` is the short form for `$_.say`.

{% include nav.html %}
