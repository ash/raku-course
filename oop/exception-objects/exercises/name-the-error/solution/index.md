---
title: The solution of ’Name the error‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 You can find the source code in the file [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Output

```
X::AdHoc
sub failed
```

## Comments

1. The `die` happens inside `risky`, but the exception travels up to the caller. The `CATCH` in the block that called `risky` handles it, which is how error handling normally works: the failure and its handler need not be in the same routine.

1. A plain `die` with a string creates an `X::AdHoc` exception, which `.^name` reports, and `.message` returns the text that was passed to `die`.

{% include nav.html %}
