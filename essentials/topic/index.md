---
title: Topic variable
---

{% include menu.html %}

`$_` is a special variable called the _topic variable_.

Consider the loop from the previous section about the [`for` loops](../loops/for):

```raku
for 1, 3, 5, 7 -> $n {
    say $n;
}
```

The variable `$n` can be ommitted, in which case it will be repalced with an automatically generated variable `$_`. The program is equivalent to the following:

```raku
for 1, 3, 5, 7 {
    say $_;
}
```

As you [should remember](/raku-course/essentials/hello-world/), it is possible to use `say` as a method:

```raku
for 1, 3, 5, 7 {
    $_.say;
}
```

Calling methods on `$_` does not require mentionning the variable itself. So, our loop can be further simplified:

```raku
for 1, 3, 5, 7 {
    .say;
}
```

{% include nav.html %}
