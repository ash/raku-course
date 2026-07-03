---
title: Exercise ’Closing over the outer‘
---

{% include menu.html %}

## Problem

A nested subroutine is a *closure*: it can see the variables of the subroutine that contains it. Write a subroutine `greet($name)` that defines a nested helper `message` taking **no** arguments. The helper returns `"Hello, $name!"`, reading `$name` straight from the enclosing `greet`. Inside `greet`, print what `message` returns, and call `greet('Anna')`.

## Example

The program prints:

```
Hello, Anna!
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
