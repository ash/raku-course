---
title: Solution of ‘Examining the result of prompt — Numbers’
---

{% include menu.html %}

## Code

Here is the complete program that solves the problem and prints both the entered value and its type.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 You can find the source code in the file [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Test runs

Run the program several times and enter the numbers of different types.

### Integers

Let us try integers first, both positive and negative.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

The type of the result is `IntStr`. This is a built-in type that has the features of both `Int` and `Str`.

### Rational numbers

Now let us try a rational number. Remember that in Raku, notation with a decimal dot creates a `Rat` number rather than a floating-point number.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

This time, the program says that the type of data in `$n` is `RatStr`, which stands for a combined type of both `Rat` and `Str`.

### Floating-point numbers

Finally, try a number in the scientific notation. You should be able to guess the output at this point.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Indeed, the new value is of the `NumStr` type.

{% include nav.html %}
