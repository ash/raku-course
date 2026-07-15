---
title: Returning subroutines
---

{% include menu.html %}

A subroutine can also **return** a subroutine. This lets you build new functions on the fly, tailored to the arguments you give:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` builds and returns an anonymous subroutine that adds `5` to its argument. We store it in `&add5` and call it like any other subroutine. Calling `adder(10)` would give a different adder that adds ten.

Notice that the returned subroutine remembers the value of `$n` from the call that created it — `add5` keeps its `5` even after `adder` has finished. A subroutine that captures values from the scope where it was created is called a [_closure_](/paradigms/closures), the subject of the next section.

Returning functions is a compact way to produce families of related operations without repeating yourself: one `adder` definition yields an unlimited number of specific adders.

{% include nav.html %}
