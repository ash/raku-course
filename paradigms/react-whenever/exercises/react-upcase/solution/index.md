---
title: The solution of ’Upper-case with react‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 You can find the source code in the file [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Output

```
[A B C]
```

## Comments

1. The `whenever` body runs once per value, upper-casing it and pushing it onto `@collected`.

1. `react` waits for the single supply to finish, so by the time `say` runs the array holds all three values in order: `[A B C]`.

1. A supply has list-like methods of its own, so you could upper-case in the stream instead of in the body — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — and the effect is the same. `.map` on a supply transforms each value as it flows past; the choice is simply whether the transformation belongs to the stream or to the reaction.

{% include nav.html %}
