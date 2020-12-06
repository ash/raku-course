[Start](../) / Part 1

# Simple input and output

In this course, we will move thought the Raku language from the very basics to more and more complicated topics. But even the simplest programs require that the program prints something so that we understand that it works and if it works correctly. Also, in some tasks, it will be handy to ask the user to enter some input — a number or a string.

So, before we learn what is what, let us introduce a couple of basic language elements that help us to print and read data. We will explore functions later in the course, but here are the two most important for us at this point.

## Output with `say`

The `say` function (or a subroutine, or simply routine) prints the values to the standard output stream, `STDOUT`. If you run the program from a terminal, the output appears there. If you run in online services such as [glot.io](https://glot.io/new/perl6), the output appears in a dedicated area in the browser.

Here is an example of using say:

    say 42;

This line can be either a part of a bigger program or be the whole program itself. It obviously prints `42` to the output.

Let us work with strings now:

    say 'Hello, World!';

Voilà, we got `Hello, World!` on the screen.

The `say` routine can accept more than one argumnet, so we can print both values in one go:

    say 42, 'Hello, World!';

Just notice that the parts of this output will be concatenated to a single string: `42Hello, World!`, so it’s better to add a space. And you should be able to solve this problem by now, for example, like this:

    say 42, ' ', 'Hello, World!';

After printing all the argumnets, the `say` routine adds a newline character to the output.

# Input with `prompt`

The opposite of `say` is `prompt`. It waits when the user of the program enters something and then passes it to the program as a string. You can take the result of `prompt` and pass it to `say`. In this case you echo what the user inputs. Let us create such a program:

    say prompt;

If you run this program, you may be confused as the program enters the state when it does nothing but waiting for any input. To make the program more user-friendly, it is a good idea to print the message, which is also called a ‘prompt’. You don’t need to add a separate `say` instruction, but you can do it directly by passing the message to prompt:

    prompt 'What language are you going to learn? '

Before wrapping this section up, let us combine all the pieces together and create a program that asks about the wishes of a user and then prints a phrase using the text that the user entered.

    say 'You are going to learn ', prompt 'What language are you going to learn? ';        

If you entered `Raku`, you get the following phrase printed:

    You are going to learn Raku

Ok, we can now talk to the program and we can make the program talk to us!

# Course Navigation 

* [Table of contents](../)
* Next: [Hello, World!](../hello-world)
