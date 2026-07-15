---
title: The reduce routine
---

{% include menu.html %}

When you want to reduce with a custom operation rather than a single named operator, use the `reduce` routine. It takes a block of two arguments and applies it across the list, carrying the running result forward:

```raku
say (1..5).reduce(* + *); # 15
```

The block `* + *` has two [Whatever](/advanced/whatever) stars: the first is the result so far, the second is the next element. So `reduce` computes `((((1 + 2) + 3) + 4) + 5)`, that is `15` — the same as `[+]`, but written as a block.

To see those two arguments at work, give them names and print each step. A pointy block hands back its last expression, so `$x + $y` is both what the block prints about and the value it returns to `reduce`:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

This prints:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Each of the first four lines is one call to the block. `$x` is the result accumulated so far and `$y` is the next element from the list. The very first call gets the list’s first two values, `1` and `2`; every later call receives the previous step’s total back as `$x` — `3`, then `6`, then `10` — paired with the next number as `$y`. The block’s value becomes the `$x` of the following call, and the final total, `15`, is what `reduce` returns and `say` prints on the last line.

Because the block can be anything, `reduce` is more general. For example, build a value step by step:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Each step multiplies the accumulator by ten and adds the next digit, turning the separate digits `1, 2, 3, 4` into the number `1234`.

Like the other block-taking methods, `reduce` reads well with the [colon-call](/advanced/colon-calls) form, which drops the parentheses around the block:

```raku
say (1..5).reduce: * + *; # 15
```

In short, `[op]` is the quick form for a named operator, and `reduce` is the flexible form for an arbitrary combining block. Both fold a list down to a single value.

{% include nav.html %}
