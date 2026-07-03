---
title: The solution of ’Clean up on leave‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 You can find the source code in the file [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Output

```
Working
Cleanup
```

## Comments

1. After `Working` is printed, the `return` exits the subroutine immediately, so `never reached` is never printed.

1. Even though the body was left early, the `LEAVE` phaser still fires on the way out, printing `Cleanup`. This guarantee is exactly why `LEAVE` is the right place to release resources — it runs no matter how the block ends.

{% include nav.html %}
