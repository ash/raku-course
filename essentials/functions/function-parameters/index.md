---
title: Function parameters
---

{% include menu.html %}

It’s time to pass some data to a function. It can take parameters listed in parentheses immediately after the name of the function.

```raku
sub greet($name) {
    say "Hello, $name!";
}
```

You can now use the function and pass different arguments to it:

```raku
greet('Alla');
greet('Karl');
```

The two calls of the same function will now produce different results:

```console
$ raku t.raku
Hello, Alla!
Hello, Karl!
```

%%tipblock

## Parameter or argument

These terms are often used interchangeably. They both refer to ‘the same thing’, but look at it from different perspectives. 

* A parameter is what the function expects.
* An argument is what you pass to it.

In the above example, `$name` is the function’s parameter, while `'Alla'` and `'Karl'` are its arguments.

%%/tipblock

## More parameters

A function can take more than a single parameter. In this case, list all of them comma-separated:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## No parameters

It is a valid case when the function takes no parameters at all. In this case, you can either add an empty pair of parentheses or omit them completely, as we did at [the beginning of this section](../).

```raku
sub greet() {
    say 'Hello, World!';
}

greet();
```

## Signature

The list of parameters of a function is called a _signature_.

{% include nav.html %}
