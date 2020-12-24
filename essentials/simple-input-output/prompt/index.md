---
title: Input with prompt
---

{% include menu.html %}

The opposite of `say` is `prompt`. It waits when the user of the program enters something and then passes it to the program as a string. You can take the result of `prompt` and pass it to `say`. In this case you echo what the user inputs. Let us create such a program:

    say prompt;

If you run this program, you may be confused as the program enters the state when it does nothing but waiting for any input. To make the program more user-friendly, it is a good idea to print the message, which is also called a ‘prompt’. You don’t need to add a separate `say` instruction, but you can do it directly by passing the message to prompt:

    prompt 'What language are you going to learn? '

Before wrapping this section up, let us combine all the pieces together and create a program that asks about the wishes of a user and then prints a phrase using the text that the user entered.

    say 'You are going to learn ', prompt 'What language are you going to learn? ';        

If you entered `Raku`, you get the following phrase printed:

    You are going to learn Raku

Ok, we can now talk to the program and we can make the program talk to us!

{% include nav.html %}
