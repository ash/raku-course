---
title: Solution of ‘True and False integers’
---

{% include menu.html %}

The fastest way to explore the question is to throw a handful of candidate numbers at the `?` operator at once and look at the results side by side:

```raku
for -2, -0.5, -1/3, 0, 1/3, 0.5, 2 -> $n {
    say "$n -> {?$n}";
}
```

The output makes the pattern obvious — every value prints `True` except the one in the middle:

    -2 -> True
    -0.5 -> True
    -0.333333 -> True
    0 -> False
    0.333333 -> True
    0.5 -> True
    2 -> True

So the sign and the magnitude do not matter at all: only zero is falsy. The next question is whether that holds for every numeric type, because `0`, `0.0`, and `0e0` are an `Int`, a `Rat`, and a `Num` respectively:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Of course, nothing changes if you try to negate the number first:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 You can find the full program with the above example in the file [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-numbers.raku).

{% include nav.html %}
