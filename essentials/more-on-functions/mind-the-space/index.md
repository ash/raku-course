---
title: Mind the space
---

{% include menu.html %}

Using functions in Raku in general is intuitive and causes no problems, but you must be warned about the following aspect.

## TL;DR

Do not add a space between the name of the function and the parentheses with its arguments. But use a space after `for` and `if`.

## Long story

Let us take a simple function:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

First of all, note the absense of spaces between the name of the function and the opening parentheses that keeps the parameters. Some coding styles in other languages may require a space there. Raku is fine with that, but this is not a practice to follow:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

But on the calling side, the absense of space is important.

If you call the function and omit the parentheses, then the space after the name of the function is unavoidable:

```raku
f 5, 6;
```

But if you add parentheses, you cannot have a space before them. This is a correct call:

```raku
f(5, 6);
```

And this call is wrong:

```raku
f (5, 6);
```

Such code causes an exception:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku understands the call with a space `f (5, 6)` as an attempt to pass a single argument `(5, 6)` to the function. You can easily check the type of this argument if you rewrite the function to accept only one argument:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

So, calling `f (5, 6)` means that we are passing a list to the function. A list as a single entity. (`List` is a data type that will be covered in the second part of the course.)

## When the space is needed

In some cases, the space is needed. This happens when you use parentheses with one of the keywords such as `if` or `for` or `loop`. The following code is wrong:

```raku
if(True != False) {
    say 'OK';
}
```

The error message explain what’s wrong:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

With the case of `if`, parentheses are not required at all, so the problem have no chances to appear if you do not use them. But in some cases, as, for example, with `loop`, you need to have them, and the space becomes mandatory:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

In this code, the same thing happens: `loop(...)` is understood by the compiler as a function call. Add a space to fix the issue. Or better rewrite the fragment using `for`.

## Conclusion

The bottom line: to avoid such issues, do not add a space between the name of the function and the parentheses with the arguments of the function, and try to avoid parentheses if that’s possible with other language constructions such as control flow.

{% include nav.html %}
