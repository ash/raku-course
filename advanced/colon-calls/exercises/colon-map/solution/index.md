---
title: The solution of ’A colon map‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 You can find the source code in the file [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Output

```
(12 14 16 18 20)
```

## Comments

1. Only `grep`, the last call in the chain, can use the colon form. The colon makes `* > 10` its argument, exactly as `grep(* > 10)` would. As we still need to print the results, `say` is now used as a function, not as a method.

1. The `map` call must keep its parentheses. If you wrote `.map: * * 2` instead, the colon would swallow `.grep(* > 10)` as part of `map`’s arguments, and the chain would break.

{% include nav.html %}
