---
title: The backward feed
---

{% include menu.html %}

Every feed so far has flowed forward with `==>`, from a source on the left into a target on the right. Raku also has the mirror operator, `<==`, the **backward feed**. It runs the other way round: the target sits on the **left**, and the data is pulled in from the source on the **right**.

Here is the even-numbers pipeline from before, written backward:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Read it right to left: take `1..10`, keep the even numbers, and collect them into `@evens`. The result is exactly the same as `(1..10) ==> grep(* %% 2) ==> my @evens` — only the direction in which you write the stages has changed.

Backward feeds chain in the same way, and again the target leads:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

The work still happens source-first — start with `1..10`, keep the evens, square them — but on the page the stages are listed from the destination back towards the origin. The order of the elements is untouched; `<==` changes only the reading direction, never the data.

Because code usually reads left to right, the forward `==>` tends to read more naturally: you meet the data first and follow it to where it lands. The backward `<==` is there for the occasions when leading with the destination tells the story better — naming *what you are building* before *what it is built from*. The two are exact mirrors, so choose whichever direction reads best.

{% include nav.html %}
