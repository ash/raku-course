---
title: Passing subroutines
---

{% include menu.html %}

To accept a subroutine as a parameter, declare it with the `&` sigil. Inside the body you can then call it by name:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

The parameter `&f` receives a piece of code, and `f($x)` calls it. Here we passed `* + 3`, a _Whatever_ expression that means “add three to whatever you are given”, so `apply(* + 3, 10)` computes `13`.

You can pass a named subroutine just as easily, by referring to it with the `&` sigil so that it is passed rather than called:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

This is exactly how `map` and `grep` work: they are subroutines that take another subroutine — your block — and apply it to each element. Writing your own subroutines that take code makes them just as flexible.

{% include nav.html %}
