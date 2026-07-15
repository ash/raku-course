---
title: The solution of ’Await a failure‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 You can find the source code in the file [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Output

```
caught: boom
```

## Comments

1. The promise’s block throws, so the promise is *broken*. The exception is not lost — it is held until someone awaits the promise.

1. `await $p` rethrows it right there, where the `CATCH` phaser handles it like any ordinary exception. This is how errors in background work surface where you wait for the result.

{% include nav.html %}
