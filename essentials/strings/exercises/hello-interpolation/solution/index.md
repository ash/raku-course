---
title: Solution to ’Hello, Interpolation!‘
---

{% include menu.html %}

## Code

Here is a possible solution to this problem:

```raku
my $name = prompt 'What is your name? ';
say "Hello, $name! Your name has {$name.chars} letters.";
```

🦋 You can find the source code in the file [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Output

Run the program, and it will enter a mode when it waits for your input. After you type the name and press Enter, the program continues and prints the greeting:

```console
$ raku exercises/strings/hello-interpolation.raku
What is your name? Raku
Hello, Raku! Your name has 4 letters.
```

## Comments

Notice that this time, the string is double-quoted. In double quotes, the variable `$name` is interpolated, so its content is placed into the string. But interpolation can do more than insert a variable: anything in curly braces, like `{$name.chars}`, is treated as code, executed, and its result is inserted. Here we reuse the `chars` method to count the letters of the name right inside the greeting.

{% include nav.html %}
