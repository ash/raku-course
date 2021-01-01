---
title: Typed parameters of functions
---

{% include menu.html %}

The parameters of functions in Raku can be made type restricted. This is very similar to [typed variables](/raku-course/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

This function demands its arguments to be integer numbers.

```raku
say add(10, 20);
# say add(pi, e); # Error
```

An attempt to pass a parameter of any other type than `Int` is a compile-time error.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Notice that Raku won’t automatically convert types even if it is possible in other cases.

```raku
# say add('3', '4'); # Error
say '3' + '4'; # OK and is 7
```

%%tipblock
## How to tell if it’s a compile-time error
If the error message starts with `===SORRY!=== Error while compiling`, it means that the error happend at compile time.
%%/tipblock

{% include nav.html %}
