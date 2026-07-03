---
title: Type constraints
---

{% include menu.html %}

Raku is a language with the so-called gradual type system. In most cases, you don’t need to worry about specifying the type of the variable. In some cases, though, you may want to restrict the type for the given variable, and you can do it by specifying the type as shown below:

```raku
my Int $var = 42;
```

Now, it is possible to assign another integer value to `$var`, but an attempt to put a string or even a floating-point number ends with an exception:

```raku
my Int $var = 42;
$var = '314E-2';
```

This program emits the following error:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}
