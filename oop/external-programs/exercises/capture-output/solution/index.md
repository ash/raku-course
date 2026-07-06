---
title: The solution of ’Capture the output‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 You can find the source code in the file [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Output

```
3
```

## Comments

1. `:out` redirects the program’s output into the `Proc` instead of the screen, and `.out.slurp(:close)` reads it all back; `.trim` removes the trailing newline that `echo` adds.

1. Once the output is an ordinary string in our program, we treat it like any other data: `.words.elems` splits it on whitespace and counts the pieces, giving `3`. This is the point of capturing — the external program becomes a building block whose result we process further.

{% include nav.html %}
