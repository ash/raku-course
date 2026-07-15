---
title: Lambdas
---

{% include menu.html %}

A _lambda_ is a function with no name. You have already met two ways to write one. The first is the **[pointy block](/advanced/anonymous-subroutines)**, which lists its parameters after the arrow `->`:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

The second is the **[Whatever](/advanced/whatever)** form, where a `*` stands in for the argument and the expression around it becomes a one-argument function:

```raku
my &square = * ** 2;
say square(7); # 49
```

Both create the same kind of thing: a piece of code you can store, pass, and call. Lambdas shine as arguments to higher-order functions, where naming them would only get in the way:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

The pointy form is clearer when the body is longer or takes several parameters; the Whatever form is wonderfully short for simple expressions. They are two spellings of the same idea: a function without a name.

{% include nav.html %}
