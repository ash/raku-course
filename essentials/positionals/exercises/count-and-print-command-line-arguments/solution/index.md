---
title: Solution of ‘Count and print command-line arguments’
---

{% include menu.html %}

In this program, a `for` loop is a good choice.

## Code

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Find the program in the file [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Output

Run the program and confirm it prints the arguments and line numbers:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Discussion

This program uses a few handy tricks. First, the `for` loop goes along the [range constructed with `^`](/essentials/ranges/excluding-endpoints). So, the range starts from 0 and goes up to (but not including) the value of `@*ARGS`. In this context, [it returns](/essentials/positionals/arrays#size) the lengths of the array.

As the first element of an array has index `0`, and the task demands we count the lines from `1`, this simple shift is computed [inside a code block](/essentials/strings/code-interpolation) in a string: `"{$n + 1} ..."`.

{% include nav.html %}
