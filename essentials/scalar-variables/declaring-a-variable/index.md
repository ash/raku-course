---
title: Scalar variables
---

{% include menu.html %}

Variables cannot appear from nowhere, that’s why you have to announce it before its usage. Raku uses _declarators_ for this. To declare a variable, use `my` as shown below:

    my $name;

Having that said, you introduced a new variable, which keeps no payload so far. But it is already known to the compiler, so it can identify it when it see the same name later in the program.

## More than one variable

You can declare two or more variables using the same `my` declarator:

    my ($x, $y);

## Course navigation

← [Scalar variables](../) | 🤔 [Quiz 1](quiz1) →

💪 Or jump directly to [the exercises to this section](../exercises).
