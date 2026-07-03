---
title: Nested subroutines
---

{% include menu.html %}

A subroutine may be defined _inside_ another subroutine. A nested subroutine is a normal subroutine, but it is visible only within the subroutine that contains it.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

The program prints:

```
I am the inner subroutine
```

Here `inner` is declared inside `outer`, and `outer` calls it. This works because `inner` is in scope throughout the body of `outer`.

Outside `outer`, however, the name `inner` does not exist. The following program fails to compile:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Nesting is useful when a helper routine is needed by one subroutine only. Keeping it inside makes clear that it is a private detail and prevents it from being called from anywhere else by mistake.

{% include nav.html %}
