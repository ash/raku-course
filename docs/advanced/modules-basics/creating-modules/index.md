---
title: Creating modules
---

{% include menu.html %}

As programs grow, it helps to split them into reusable pieces. A _module_ is a unit of code, kept in its own file, that other programs can load and use.

A module file has the extension `.rakumod` and begins by naming the module with `unit module`. Subroutines you write inside are private by default; to make one available to code that uses the module, mark it with the `is export` trait.

Here is a module stored in a file called `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

The `hello` subroutine carries `is export`, so it will be visible to any program that uses the module. A subroutine without `is export` would stay private to the module.

A module can also share data through `our` variables, which become reachable through the module’s name. Adding a version number to `Greeting` is as simple as one more line in the file:

```raku
our $version = '1.0';
```

With that line in `Greeting.rakumod`, the value is available as `$Greeting::version` wherever the module is loaded.

The next topics show [how a program loads such a module](/advanced/modules-basics/using-modules) and what exactly it gets from it.

{% include nav.html %}
