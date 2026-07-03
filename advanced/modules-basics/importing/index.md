---
title: Importing
---

{% include menu.html %}

There is more than one way to bring a module into a program. The three statements `use`, `need`, and `require` differ in _when_ the module is loaded and in _what_ it makes available.

## `use`

You have already met `use`. It loads the module at compile time and imports its exported names, so they can be called directly:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` also loads the module at compile time, but it does _not_ import the exported names. You still reach the module’s `our` variables through the module’s name:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

After `need Greeting`, a bare `hello(...)` would not be recognised, because nothing was imported — only the qualified names, such as `$Greeting::version`, are available.

## `require`

`require` loads the module at _run time_ rather than at compile time. This is useful when you do not know until the program runs whether a module will be needed, for example when its name is decided by user input.

Because the loading happens at run time, nothing is imported automatically. Listing the symbols you want in angle brackets after the name pulls them in, so they can be called directly:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

For everyday use, `use` is what you want; `need` and `require` are there for the less common cases.

{% include nav.html %}
