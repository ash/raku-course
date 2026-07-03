---
title: Using modules
---

{% include menu.html %}

To use a module, load it with the `use` statement. After that, the names the module exports are available as if you had written them yourself.

Given the `Greeting.rakumod` file from the previous topic, a program uses it like this:

```raku
use Greeting;

say hello('Anna');
```

Because `hello` was marked `is export`, the `use` statement makes it available, and the program calls it directly:

```
Hello, Anna!
```

For Raku to find the module, it has to be on the module search path. When the module file sits in the same directory as your program, you tell Raku to look there with the `-I.` option (the dot means “the current directory”):

```console
$ raku -I. program.raku
Hello, Anna!
```

Installed modules (covered later in [Installing modules from the web](/advanced/installing-modules)) are found automatically, so the `-I` option is only needed for modules that live next to your own program.

{% include nav.html %}
