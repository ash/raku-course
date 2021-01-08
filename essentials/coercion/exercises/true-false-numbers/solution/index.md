---
title: Solution of ‘True and False integers’
---

{% include menu.html %}

To convert a number to a Boolean value, you can use either the `?` prefix operator or a constructor form, or call the `Bool` method, or using the `so` routine as either a function or a method:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

It is quite obvious that non-zero values will be converted to `True`. We are thus most interested in looking at those options that become `False`.

All zeroes, integer, floating-point, or rational, are casted to `False`:

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

🦋 You can find the full program with the above example in the file [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}
