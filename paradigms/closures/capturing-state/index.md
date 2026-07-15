---
title: Closures
---

{% include menu.html %}

A _closure_ is a subroutine that captures variables from the scope in which it was defined, and keeps them alive even after that scope has ended. This gives the subroutine its own private, persistent state.

The classic example is a counter:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

The variable `$n` is declared inside `make-counter`. The returned subroutine refers to `$n`, so it closes over it: each call to `count` increments and returns the **same** `$n`, even though `make-counter` itself finished long ago.

Every call to `make-counter` creates a fresh `$n`, so separate counters are independent:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Closures let a function carry state without a global variable and without an object. They are the functional-programming way to remember something between calls.

{% include nav.html %}
