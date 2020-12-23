---
title: The solution of ’Greet a person‘
---

[Start](../../../..) / [Part 1](../../../../part1) / [Scalar variables](../../..) / [Exercises](../..) / [Greet a person](../)

# The solution

Here is a possible solution to the task.

## Code

    my $name = prompt 'What is your name? ';
    say 'Hello, ', $name, '!';

🦋 You can find the source code in the file [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Output

Run the program and enter a name when you get the prompt:

    $ raku problems/greet-a-person/solution/greet-a-person.raku 
    What is your name? Inge
    Hello, Inge!

## Comments

This program uses a scalar variable `$name` to keep a string that was entered by the user in response to the prompt. When the variable is used in the list that you pass to the `say` routine, you get the name in a message.

## Notes

1. The program does not end the output with a newline.
2. There is better way to solve this problem using string interpolations.

Let us return to this problem in the near future.

## Next exercise

| [The answer to life, the Universe and everything](../../answer) →

## Course navigation

← [Scalar variables](../../..) / [Declaration with initialization](../../../declaration-with-initialization) | [Strings](../../../../strings) →
