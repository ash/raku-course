---
title: Data types and scalar containers
---

{% include menu.html %}

Let us look at a program that reuses the same variable to hold different kinds of data. We use `dd` to see what the container holds at each step. This example is here for demonstration purposes and is not a recommended programming style.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Each `dd` call shows what the `$value` variable currently contains:

```
$value = Any
$value = 42
$value = "forty-two"
```

At first, the variable is empty, and `dd` reports its value as `Any` — the undefined base value that an untyped container starts with. After the assignments, `dd` shows the integer and then the string.

Notice that `dd` does not print a type before the name here. An untyped container does not commit to any type, so only the value is shown. As you will see in the next topic, [a container with a declared type](/advanced/scalar-containers/type-constraints) behaves differently.

{% include nav.html %}
