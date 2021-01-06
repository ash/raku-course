---
title: The solution of ’Greet a person‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ', $name, '!';
```

🦋 You can find the source code in the file [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Output

Run the program and enter a name when you get the prompt:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
What is your name? Inge
Hello, Inge!
```

## Comments

1. This program uses a scalar variable `$name` to keep a string that was entered by the user in response to the prompt. When the variable is used in the list that you pass to the `say` routine, you get the name in a message.

1. There is a better way to solve this problem using string interpolation. Let us return to this problem shortly.

{% include nav.html %}