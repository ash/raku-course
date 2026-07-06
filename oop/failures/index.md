---
title: Soft failures
---

{% include menu.html %}

Throwing an exception with `die` stops everything immediately. Sometimes that is too drastic: you want a subroutine to report that it could not produce a result, but let the caller decide whether that is fatal. For this, Raku has _soft failures_, created with `fail`.

When a subroutine calls `fail`, it does not throw straight away. Instead it returns a special `Failure` object to the caller. A `Failure` is undefined, so the caller can quietly check for it:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

The successful call returns `5`. The failing call returns a `Failure`, which reports `False` for `defined`, so the caller can test the result before using it.

A `Failure` is called _soft_ because it turns into a real, thrown exception only if you try to use it as a value without checking it first. As long as you handle it — for example by testing `defined` — it stays quiet. This lets a subroutine signal a problem without forcing the whole program to stop.

## You have seen this before

This deferred style of failure is not unique to `fail`. Earlier in this part you met the same idea twice.

A **division by zero** produces a value quietly and only throws when you actually use it:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

A **failing external program** returns a `Proc` that throws only if you discard it unhandled — save it and inspect it, and it stays a quiet value:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

In each case a problem does not stop the program the moment it happens: it becomes a value you can check, and it escalates to a thrown exception only when you use it unchecked or ignore it. The topic [Not every error is immediate](/oop/try/deferred-errors) shows these two side by side.

{% include nav.html %}
