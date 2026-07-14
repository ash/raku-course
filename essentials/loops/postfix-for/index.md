---
title: 'Postfix form of "for"'
---

{% include menu.html %}

We have already seen other statement modifiers: [`if` and `unless`](/essentials/conditional-checks/modifiers) and [`while` and `until`](/essentials/loops/modifiers). And that’s the reason for a small celebration as the design of Raku is very consistent.

With a short loop body, the `for` loop can be written in a postfix form:

```raku
.say for 1..7;
```

As you see, ranges are very natural when used with the postfix form of `for`.

This program is equivalent to a more traditional variant:

```raku
for 1..7 -> $n {
    say $n;
}
```

Or, if the default loop variable is used, to:

```raku
for 1..7 {
    .say;
}
```

Here, `.say` is the short form for `$_.say`.


{% include nav.html %}
