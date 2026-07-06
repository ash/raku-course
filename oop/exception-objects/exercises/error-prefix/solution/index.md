---
title: The solution of ’Prefix the message‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 You can find the source code in the file [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Output

```
Error: timeout
```

## Comments

1. The exception object’s `.message` gives the text passed to `die`.

1. Concatenating it after `Error: ` builds the final line. The exception object is just a value, so you can use its message however you like.

{% include nav.html %}
