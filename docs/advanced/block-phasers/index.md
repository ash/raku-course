---
title: Block-related phasers
---

{% include menu.html %}

Besides the program-wide phasers, Raku has phasers tied to the life of a single block or loop.

## Entering and leaving a block

The `ENTER` phaser runs each time execution enters a block, and the `LEAVE` phaser runs each time it leaves — whichever line they are written on:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

The output shows that `ENTER` runs first and `LEAVE` runs last, around the body of the block:

```
before block
entering
inside
leaving
after block
```

`LEAVE` is especially useful because it runs even if the block is left early, which makes it a reliable place to release a resource.

A phaser can take a full `{ }` block instead of a single statement, and you may set up several of them. When a block has more than one `LEAVE`, they fire in reverse order — the last one registered runs first, so the block unwinds like a stack:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Resource `A` is opened first and closed last:

```
open A
open B
work
close B
close A
done
```

This last-in, first-out ordering is exactly what you want for cleanup: whatever was set up most recently is torn down first. The program-wide `END` phaser behaves the same way — several `END` blocks also run in reverse of the order they were written.

## Loop phasers

Inside loops, three more phasers mark the stages of the iteration: `FIRST` runs once before the first iteration, `LAST` runs once after the last, and `NEXT` runs at the end of each iteration:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

The loop produces:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

As with the other phasers, the position of `FIRST`, `NEXT`, and `LAST` in the source does not matter — each runs at its own moment.

{% include nav.html %}
