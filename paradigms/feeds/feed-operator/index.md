---
title: The feed operator
---

{% include menu.html %}

The feed operator `==>` sends a list from the left into the operation on the right. The result then flows on to wherever the next `==>` points, ending in a variable that collects it:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Read it left to right: take `1..10`, keep the even numbers, and store the result in `@evens`. The `%%` operator means “is divisible by”, so `* %% 2` keeps the even numbers.

The important rule is that a feed must **end in a target** — usually `my @array` (or an existing variable). The data flows forward into it. Writing the assignment the other way round, with `=`, does not do what you want, because the feed and the assignment compete; always let the feed finish into its variable.

A feed is just another way to spell a chain of list operations. The same result could be written `my @evens = (1..10).grep(* %% 2)`. The feed form comes into its own when there are several stages, as the next topic shows.

{% include nav.html %}
