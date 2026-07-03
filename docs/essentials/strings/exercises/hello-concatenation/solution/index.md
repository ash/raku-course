---
title: Solution to ’Hello, Concatenation!‘
---

{% include menu.html %}

## Code

Here is a possible solution to this problem:

```raku
my $name = prompt 'What is your name? ';
my $city = prompt 'Where are you from? ';
say 'Hello, ' ~ $name ~ ' from ' ~ $city ~ '!';
```

🦋 You can find the source code in the file [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Output

Run the program, and it will wait for your input twice. After you answer both prompts, the program prints the greeting:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? John
Where are you from? Berlin
Hello, John from Berlin!
```

## Comments

This time the greeting is built from five pieces glued together with the `~` operator: three literal strings (`'Hello, '`, `' from '`, and `'!'`) and the two variables between them. They are all concatenated into a single string first, and only then passed to `say`.

Compare the program with [the earlier variant](../../../../scalar-variables/exercises/greet-a-person/solution) where we passed several strings to the `say` routine separated by commas:

```raku
say 'Hello, ', $name, '!';
```

There, `say` received several separate arguments and printed them one after another. Here, we produce one ready-made string ourselves.

{% include nav.html %}
