---
title: Solution of ‘Print a series of numbers’
---

{% include menu.html %}

There are more than one ways to solve the given problem.

## Code 1

The first sollution is more Raku-ish and compact.

```raku
.say for @*ARGS[0] .. @*ARGS[1];
```

🦋 Find the program in the file [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/topic/series-of-numbers.raku).

## Code 2

The second possible solution can use the `loop` statement.

```raku
loop (my $n = @*ARGS[0]; $n <= @*ARGS[1]; $n++) {
    say $n;
}
```

🦋 Find the program in the file [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/topic/series-of-numbers-loop.raku).

As you can see, the first variant is significantly shorter and more expressive.

## Discussion

The arguments from command line are read using the built-in array [`@*ARGS`](/raku-course/essentials/positionals/args-array). The input values are [of the type `IntStr`](/raku-course/essentials/data-types/exercises/prompt-numbers), so they can be used as integers to form the range.


In the first variant of the program, the [postfix form of the `for` loop](/raku-course/essentials/topic/postfix-for) is used. In the second program, a `loop` is chosen.

## Output

Pass the two numbers in the console and run the program. Both variants produce the same output.

```console
$ raku exercises/topic/series-of-numbers.raku 15 19
15
16
17
18
19
```

{% include nav.html %}
