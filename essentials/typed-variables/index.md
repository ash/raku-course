---
title: Typed variables
---

{% include menu.html %}

In Raku, a scalar variable (or, a scalar container) can keep a single object of different types. For example, the same variable can first contain a number, and ten a string:

```raku
my $var = 42;
$var = 'Hello';
```

This is, probably, not the best coding practice, but it is a perfectly valid Raku program.

Raku is a language with the so-called gradual type system. In most cases, you don’t need to worry about specifying the type of the variable. You can reuse the same variable to first store a string and then a number, or convert a number to the string implicitly:

This is a valid program that does not break:

```raku
my $var = 42;
$var = 'string';
```

So is this program:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Nevertheless, Raku allows you to specify the type of things that you can keep in the given variable, if you want to. Also, sometimes you need to convert the values of one type to another type. There are a few ways you can do that.

## Exercises

Please do not skip the exercises after this section as they reveal some additional information about the data types of Raku.

{% include nav.html %}
