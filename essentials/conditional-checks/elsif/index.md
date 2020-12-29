---
title: Using eslif
---

{% include menu.html %}

So far, we’ve learned `if` and `else`. What if you want to organise a chain of tests? There are at least two ways to do that in Raku (actually, there are even more).

One of the possibilities is to use the chain of `if`, `elsif`, and `else` blocks. Note the spelling of `elsif`. It is neither `elseif` nor `else if`.

```raku
my $x = prompt 'Enter the number: ';
if $x > 100 {
    say "$x is bigger than 100.";
}
elsif $x > 50 {
    say "$x is bigger than 50.";
}
elsif $x > 25 {
    say "$x is bigger than 25.";
}
else {
    say "$x is 25 or smaller.";
}
```

In this program, there are three branches and three tests which are executed one after another. Only one of the blocks is executed. If neither check is `True`, the `else` block is run.

Here are a few test run of the program that triggers all of the blocks:

```console
$ raku t.raku
Enter the number: 120
120 is bigger than 100.

$ raku t.raku
Enter the number: 75      
75 is bigger than 50.

$ raku t.raku
Enter the number: 30
30 is bigger than 25.

$ raku t.raku
Enter the number: 10
10 is 25 or smaller.
```

An alternative way is to use the `given` and `when` pair, which we will learn in the future.

{% include nav.html %}
