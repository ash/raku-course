---
title: The solution of ’A typed MAIN‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 You can find the source code in the file [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Output

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Comments

1. The `Int` constraint means the command-line word must look like an integer. Given `5`, it binds to `$n` and the body prints `10`.

1. Given `abc`, the value cannot become an `Int`, so the signature does not match. Raku does not run the body — it prints the generated usage message instead, giving you argument validation without any manual checks.

{% include nav.html %}
