---
title: '"for" loop'
---

{% include menu.html %}

The `for` loop is a power tool to iterate over multiple elements. For example, let us take an array first:

```raku
my @numbers = 1, 3, 5, 7;
for @numbers -> $n {
    say $n;
}
```

In this program, the variable `$n` takes the next value from the `@numbers` array on each iteration. Notice that you do not have to explicitly declare the variable with `my`. The block of code is repeated as many times as the number of elements in the data source. So, the program prints the numbers line by line:

```console
$ raku t.raku 
1
3
5
7
```

## `for` with ranges

Let us take a range as data source:

```raku
for 1..5 -> $n {
    say $n;
}
```

Now, the program iterates over all the values that the [range](/essentials/positionals/ranges) `1..5` generates. These are `1`, `2`, `3`, `4`, and `5`.

## Taking more than one value

An interesting feature of Raku is that you can take more than one item in a single iteration. The following program prints two number in a loop:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

The output of this program is the following:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}
