---
title: The solution of ’A command-line flag‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 You can find the source code in the file [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Output

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Comments

1. A `Bool` named parameter becomes a flag: passing `--shout` sets `$shout` to `True`, while omitting it leaves the default `False`.

1. The ternary then prints `HELLO` or `hello` accordingly. Unlike a `--name=value` option, a flag takes no value — its mere presence is what counts.

{% include nav.html %}
