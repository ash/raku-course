---
title: The solution of ’Too big‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 You can find the source code in the file [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Output

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Comments

1. `TooBig is Exception` makes the class a throwable exception. It carries two pieces of data, `value` and `limit`, and its `message` method weaves both into the reported text.

1. `.throw` raises the exception, and `when TooBig` matches it by type. The handler does more than print the message: it reads the `limit` attribute straight off the caught object to give a helpful hint. That is the advantage of a custom exception over a plain string — the handler receives structured data it can act on.

1. The exception is thrown **only** when `$value > $limit`. For `30`, no exception is raised and the loop body runs to its `say`, printing that the value is within the limit. For `99` and `60`, the `throw` fires, so that `say` is skipped and the `CATCH` handles it instead. The `for` body is itself the block the `CATCH` guards, so a caught exception ends only the current iteration — the loop then simply moves on to the next value.

{% include nav.html %}
