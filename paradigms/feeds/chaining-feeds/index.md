---
title: Chaining feeds
---

{% include menu.html %}

The real value of feeds appears when you have several stages. Each `==>` passes its result to the next operation, so a whole pipeline reads top to bottom in the order the work happens:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Follow the data down the page: start with `1..10`, keep the even numbers, square each of them, and collect the result. The even numbers are `2, 4, 6, 8, 10`, and their squares are `4, 16, 36, 64, 100`.

Written as a method chain, the same pipeline is `(1..10).grep(* %% 2).map(* ** 2)` — and that reads left to right just as the feed does. A method chain is not inside-out; it runs its stages in the very same order. The form that genuinely reads inside-out is nesting the operations as plain functions, `map(* ** 2, grep(* %% 2, 1..10))`, where you have to start at the innermost call and work outwards.

A feed, then, is not a way to escape inside-out code — it is another spelling of a left-to-right pipeline. What it adds is layout: each `==>` stage can sit on its own line, and the one operator works the same for method-style and function-style steps alike, which keeps a long pipeline easy to scan. Feeds and method chains ultimately do the same job; choose whichever makes a particular transformation clearest.

{% include nav.html %}
