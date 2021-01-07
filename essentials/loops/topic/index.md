---
title: Topic variable
---

{% include menu.html %}

`$_` is a special variable called the _topic variable_.

Consider the loop over a range:

```raku
for 1..5 -> $n {
    say $n;
}
```

The variable `$n` can be omitted, in which case it will be replaced with an automatically generated variable `$_`. The program is equivalent to the following:

```raku
for 1..5 {
    say $_;
}
```

As you [remember](/essentials/hello-world/), it is possible to use `say` as a method:

```raku
for 1..5 {
    $_.say;
}
```

Calling methods on `$_` does not require mentioning the variable itself. So, our loop can be simplified further:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}
