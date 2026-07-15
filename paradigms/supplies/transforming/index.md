---
title: Transforming a supply
---

{% include menu.html %}

A supply can be transformed before you tap it, much like a list. Methods such as `map` and `grep` produce a **new** supply whose values are the transformed ones:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

The `map(* * 10)` builds a new supply that emits ten times each original value, and the tap collects those into `@out`.

`grep` filters a supply, passing on only the values for which its block is true:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Because each transformation returns another supply, you can chain them, building a small pipeline that reacts to the stream:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

This is the same map/grep vocabulary you know from lists, applied to values arriving over time. The supply does the pushing; your pipeline shapes what comes out.

{% include nav.html %}
