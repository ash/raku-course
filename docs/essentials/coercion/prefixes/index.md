---
title: Converting types with prefix operators
---

{% include menu.html %}

Another way of transforming the type of an object is to use prefix operators. Those are one-character operators that are placed immediately before the value (or a variable).

`~` | String coercion
`+` | Numeric coercion
`?` | Boolean coercion

Consider an example of creating a Boolean value out of an integer:

```raku
say ?42; # True
```

Converting to a string is similar:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, as "-30" has 3 characters
```

Notice that with numeric conversion, the type of the converted value differs depending on the number in question. Compare the following conversions from strings:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

For Boolean conversions, there is another routine called `so`. You can use it as a prefix operator or as a method:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}
