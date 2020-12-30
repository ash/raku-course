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

🦋 Find the program in the file [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/count-and-print-arguments.raku).

## Output

Run the program and confirm it prints the arguments line by line:

```console
$ raku exercises/loops/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Discussion

In this solution, a number of handy tricks are used. First, the `for` loop goes along the [range constructed with `^`](/raku-course/essentials/positionals/ranges#excluding-edges). So, the range starts from 0 and goes up to (but not including) the value of `@*ARGS`. In this context, [it returns](/raku-course/essentials/positionals/arrays#size) the lengths of the array.

As the first element of an array has index `0`, and the task demands we count the lines from `1`, this simple shift is computed [inside a code block](/raku-course/essentials/strings/code-interpolation) in a string: `"{$n + 1} ..."`.

{% include nav.html %}
