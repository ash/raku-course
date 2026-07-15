---
title: The solution of ’A racing sum‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 You can find the source code in the file [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Output

```
22100
```

## Comments

1. `.race` runs the whole chain — squaring each number and filtering for the even squares — in parallel, and, unlike `.hyper`, does not promise to return the elements in order.

1. That is fine here because the final step is a sum, which is order-independent: the even squares (`2²`, `4²`, …, `50²`) add up to `22100` no matter what order they arrive in. When you only combine the results (sum, count), `.race` is the natural choice and can carry a little less overhead than `.hyper`.

{% include nav.html %}
