---
title: Data type conversion
---

{% include menu.html %}

Raku is a language with the so-called gradual type system. In most cases, you don’t need to worry about specifying the type of the variable. You can reuse the same variable to first store a string and then a number, or convert a number to the string implicitly:

This is a valid program that does not break:

    my $var = 42;
    $var = 'string';

So is this program:

    my $a = '100';
    my $b = 200;
    say $a + $b; # 300

Nevertheless, Raku allows you to specify the type of things that you can keep in the given variable, if you want to. Also, sometimes you need to convert the values of one type to another type. There are a few ways you can do that.

## Next steps

* [Converting types using type coercion methods](methods)
* [Converting types using constructor forms](new)
* [Converting types with prefix operators](prefixes)

## Course navigation

← [Data types and introspection](/raku-course/what) | [Converting types using type coercion methods](methods) →
