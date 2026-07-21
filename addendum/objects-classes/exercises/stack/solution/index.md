---
title: The solution of ’A stack class‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Stack {
    has @!items;

    method push($x) { @!items.push($x) }
    method pop      { @!items.pop }
    method peek     { @!items.tail }
    method size     { @!items.elems }
}

my $stack = Stack.new;
$stack.push($_) for 1, 2, 3;

say $stack.peek;
say $stack.pop;
say $stack.size;
```

🦋 You can find the source code in the file [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Output

```
3
3
2
```

## Comments

1. `@!items` is a private attribute — the `!` twigil means it is reachable only
from inside the class, which is exactly what a stack’s storage should be.

1. `peek` uses `.tail` to look at the last element without removing it, while `pop`
actually takes it off, so the size drops from `3` to `2`.

{% include nav.html %}
