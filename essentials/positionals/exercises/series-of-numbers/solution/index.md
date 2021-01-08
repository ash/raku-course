---
title: Solution of ‘Print a series of numbers’
---

{% include menu.html %}

There is more than one way to solve the given problem.

## Code 1

The first solution is more Raku-ish and compact.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

.say for $begin .. $end;
```

🦋 Find the program in the file [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Code 2

The second possible solution can use the `loop` statement.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Find the program in the file [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

As you can see, the first variant is significantly shorter and more expressive.

## Discussion

In the first variant of the program, the [postfix form of the `for` loop](/essentials/loops/postfix-for) is used. In the second program, a `loop` is chosen.

## Output

Pass the two numbers in the console and run the program. Both variants produce the same output.

```console
$ raku exercises/positionals/series-of-numbers.raku
Begin: 15
End: 19
15
16
17
18
19
```

{% include nav.html %}
