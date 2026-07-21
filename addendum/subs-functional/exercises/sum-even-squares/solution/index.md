---
title: The solution of ’Sum of even squares‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 You can find the source code in the file [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Output

```
220
```

## Comments

1. The chain reads left to right: `.grep(* %% 2)` keeps the even numbers,
`.map(* ** 2)` squares each, and `[+]` reduces the squares to their sum.

1. The even numbers `2 4 6 8 10` square to `4 16 36 64 100`, which add up to `220`.

1. The same steps can be written as a [feed pipeline](/paradigms/feeds/feed-operator),
where `==>` passes each result on to the next stage — so the flow reads top to
bottom rather than as a method chain:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Each `==>` feeds its left-hand list into the next routine, and the final
    `==> say()` prints the total, `220`.

{% include nav.html %}
