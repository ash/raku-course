---
title: do and the value of a block
---

{% include menu.html %}

A block on its own is a statement, not an expression, so you cannot normally assign it to a variable. The `do` prefix turns a block into an expression whose value is the value of its **last** statement:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Inside the block you can declare variables, run several statements, and compute a result; `do` hands back whatever the block evaluates to. This is handy when producing a value needs more than a single expression.

`do` also works in front of the control-flow statements, letting them return a value too:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Here `do given` turns the whole `given`/`when` into an expression that yields `positive`. The same works with `do if` and `do for`. In short, `do` is how you use a block, or a control structure, in a place that expects a value.

{% include nav.html %}
