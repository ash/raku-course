---
title: Function parameters
---

{% include menu.html %}

It’s time to pass some data to a function. A function can take parameters, and they are listed in parentheses immediately after the name of the function.

    sub greet($name) {
        say "Hello, $name!";
    }

It is now possible to use the function passing different arguments to it:

    greet('Alla');
    greet('Karl');

The two calls of the same function will now produce different results:

    $ raku t.raku
    Hello, Alla!
    Hello, Karl!

## More parameters

A function can take more than a single parameter. In this case, just list all of them comma-separated:

    sub add($x, $y) {
        say $x + $y;
    }

    add(10, 20); # 30

## No parameters

It is a valid case when the function takes no parameters at all. In this case you can either add an empty pair of parentheses or omit them completely, as we did in [the beginning of this section](../).

    sub greet() {
        say 'Hello, World!';
    }

    greet();

{% include nav.html %}
