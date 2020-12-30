---
title: 'Solution: Hello World!'
---

{% include menu.html %}

After a long way through the course, we had to return to this program again, as there we’ve just learnt the new way of writing Raku programs.

## Code 1

```raku
sub MAIN() {
    say 'Hello, World!';
}
```

🦋 Find the program in the file [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Code 2

```raku
unit sub MAIN;
say 'Hello, World!';
```

🦋 Find the program in the file [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Example

Run either program:

```console
$ raku exercises/the-main-function/hello-world.raku
Hello, World!

$ raku exercises/the-main-function/hello-world-unit.raku
Hello, World!
```

{% include nav.html %}
