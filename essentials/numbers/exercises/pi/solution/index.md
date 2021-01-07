---
title: Solution to ‘The value of π’
---

{% include menu.html %}

The program to print the value of π is simple enough.

## Code

```raku
say π;
```

🦋 You can find the full code in the file [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/pi.raku).

## Output

Run the program and see what it prints:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Comments

Raku offers us a built-in constant called `π`, which makes the program trivial. Nevertheless, consider other options for doing the same:

```raku
    π.say;
```

Or:

```raku
    pi.say;
```

Or:

```raku
    say pi;
```

{% include nav.html %}
