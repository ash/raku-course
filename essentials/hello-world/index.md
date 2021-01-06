---
title: Hello, World! in Raku
---

{% include menu.html %}

Great, we have learnt the essential things required to talk to Raku and see the response, so let’s go straight to the first real program, ‘Hello, World!’.

```raku
say 'Hello, World!';
```

Just before we learn the basics of functions, let us see a few different options you can use in this program.

First of all, you can put parentheses around the function argument:

```raku
say('Hello, World!');
```

Second, you can use other functions, namely, `put`, and `print`. Again, with or without parentheses:

```raku
put 'Hello, World!';

print("Hello, World!\n");
```

Notice that you need to manually add the newline character at the end of the message in the case of `print`. But don’t worry, we’ll cover all these details later.

Before we move on, let me show one more exciting option. You can call a function as a method directly on the string:

```raku
'Hello, World!'.say;
```

{% include nav.html %}
