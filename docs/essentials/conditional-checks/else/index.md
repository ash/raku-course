---
title: The else block
---

{% include menu.html %}

An `if` block can be followed by an `else` block, which is run when the condition is not satisfied.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'You are fine.';
}
else {
    say 'Call a doctor, maybe?';
}
```

The `else` block cannot be used on its own (there is a better alternative called [`unless`](../unless), which will be introduced just in a minute).

{% include nav.html %}
