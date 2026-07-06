---
title: Default values
---

{% include menu.html %}

An attribute can be given a _default value_, which is used when an object is created without a value for it. Write the default after the attribute, with `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Notice that similar to variables, it is possible to force the type of the attributes.

If you do not pass `weight` to `new`, the attribute takes the default:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

You can still override the default by passing a value:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Without a default, and without a value passed to `new`, an attribute is simply undefined, exactly like a fresh scalar variable.

{% include nav.html %}
