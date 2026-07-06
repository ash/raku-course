---
title: The `CATCH` phaser
---

{% include menu.html %}

The `try` block is convenient, but it treats the whole block as one unit: either it works or it does not. The `CATCH` phaser gives you finer control — it lets you handle an exception _inside_ the block where it happened, and decide what to do.

`CATCH` is a phaser, like the ones you met in the [section about control flow](/advanced/phasers). You write it anywhere inside a block; it runs only if an exception is thrown there. The exception is available as the topic `$_`:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

The program prints:

```
Caught: Boom!
after
```

The `default` block inside `CATCH` handles any exception. Once it has run, the exception is considered handled, so the program does not stop — execution carries on after the enclosing block, which is why `after` is printed.

Without the `CATCH`, the `die` would have ended the program before `after` could be reached.

{% include nav.html %}
