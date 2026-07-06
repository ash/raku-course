---
title: The solution of ’Two exception types‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 You can find the source code in the file [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Output

```
small
big
```

## Comments

1. The loop throws a `TooSmall` on the first pass and a `TooBig` on the second, each inside its own block with its own `CATCH`.

1. The `CATCH` phaser has a `when` branch for each exception type. On each pass, only the branch matching the thrown type runs — so the first pass prints `small` and the second prints `big`. This is how a single set of handlers reacts differently to different kinds of error.

{% include nav.html %}
