---
title: Input with prompt
---

{% include menu.html %}

The opposite of `say` is `prompt`. It waits when the user enters something and presses Enter. Then, it sends the input to the program as a string. You can take the result of `prompt` and pass it to `say`. In this case, you echo what the user types. Let us create such a program:

```raku
say prompt;
```

If you run this program, you may be confused as the program enters the state, in which it only waits for any input. To make the program more user-friendly, it is good to print the prompt message. You don’t need to add a separate `say`, because you can pass the message to `prompt`:

```raku
prompt 'What language are you going to learn? '
```

Before wrapping up this section, let us combine all the pieces and create a program that asks about user's wishes and then prints a phrase using the text that the user entered.

```raku
say 'You are going to learn ', prompt 'What language are you going to learn? ';
```

If you entered `Raku`, you get the following phrase printed:

    You are going to learn Raku

Ok, we can now talk to the program, and we can make the program talk to us!

Note that as `say` needs to know the strings before printing them, Raku will first execute `prompt`, so the dialogue goes in the correct order:

```console
$ raku t.raku 
What language are you going to learn? Raku
You are going to learn Raku
```

{% include nav.html %}
