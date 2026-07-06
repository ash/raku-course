---
title: The solution of ’Match the type‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 You can find the source code in the file [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Output

```
cannot divide by zero
```

## Comments

1. In Raku, `1 / 0` does not blow up immediately; it produces a lazy `Failure`. The exception is thrown only when we *use* the value, here by trying to `say` it.

1. The thrown exception is of the built-in type `X::Numeric::DivideByZero`, and `when X::Numeric::DivideByZero` matches it precisely. Matching on a specific type, rather than catching everything with `default`, lets you handle different errors in different ways.

{% include nav.html %}
