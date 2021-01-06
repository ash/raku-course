---
title: Solution of ‘Converting user input to a number’
---

{% include menu.html %}

The program can be as simple as this:

## Code

```raku
my Int $n = prompt 'Enter a number: ';
say $n;
```

🦋 You can find the source code in the file [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Example

Run it and enter an integer number, either positive or negative:

```console
$ raku exercises/typed-variables/input-number.raku
Enter a number: -42
-42
```

## Comments

As we’ve seen in the [previous exercise](/essentials/typed-variables/exercises/allomorphs), the return value of `prompt` is `IntStr`, which can be assigned to an `Int` variable with no problems. 

Notice, though, that the program will be terminated with an exception if you enter a string that cannot be converted to an integer number.

{% include nav.html %}
