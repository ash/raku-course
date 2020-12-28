---
title: Returning the result
---

{% include menu.html %}

Functions often not just do something but also return a result. Actually, in functional programming, functions should not produce any side effects such as printing to console. But nevertheless, Raku does not limit you from doing so. Anyways, let’s see how to return a value from a function and how to get it from a calling code.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Here, the function called `add` takes two numbers and returns their sum. An explicit `return` is used. On the calling side, the value the function returns can be used as any other value. In the above program, it is assigned to a variable.

## The last evaluated value

In Raku, an explicit `return` is not required if the result that you want to return from a funciton is the last computed value in its body. Our `add` funciton can be simplified in this manner:

```raku
sub add($x, $y) {
    $x + $y
}
```

As you may have noticed, there is no semicolon at the end of the line as it is not required when the line ends the current code block.

Such trivial and small functions are often formatted in a single line for a more compact code:

```raku
sub add($x, $y) { $x + $y }
```

{% include nav.html %}
