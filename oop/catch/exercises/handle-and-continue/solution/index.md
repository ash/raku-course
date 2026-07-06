---
title: The solution of ’Handle and continue‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 You can find the source code in the file [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Output

```
processed ok
skipped (bad): boom
processed ok
```

## Comments

1. The `CATCH` phaser is inside the per-item block, so it handles a `die` for just that one item. Because the exception is handled there, it never escapes to stop the whole loop.

1. This is the typical use of `CATCH` over `try`: a failure in one iteration is dealt with locally, and the loop moves on to the next item. The middle item fails, but the two `ok` items are still processed.

{% include nav.html %}
