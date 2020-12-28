---
title: Topic variable
---

{% include menu.html %}

`$_` is a special variable called the _topic variable_.

Consider the loop from the previous section about the [`for` loops](../loops/for):

```raku
for 1..5 -> $n {
    say $n;
}
```

The variable `$n` can be ommitted, in which case it will be repalced with an automatically generated variable `$_`. The program is equivalent to the following:

```raku
for 1..5 {
    say $_;
}
```

As you [should remember](/raku-course/essentials/hello-world/), it is possible to use `say` as a method:

```raku
for 1..5 {
    $_.say;
}
```

Calling methods on `$_` does not require mentionning the variable itself. So, our loop can be further simplified:

```raku
for 1..5 {
    .say;
}
```

But that’s not all. As there is a single statement in the loop body, it is possible to use `for` as a statement modifier and place it after the loop body:

```raku
.say for 1..5;
```

We have already seen other statement modifiers: [`if` and `else`](/raku-course/essentials/conditional-checks/modifiers) and [`while` and `until`](/raku-course/essentials/loops/modifiers). And that’s a reason for a small celebration as the design of Raku is very consistent.

{% include nav.html %}
