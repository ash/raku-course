---
title: Module introspection
---

{% include menu.html %}

A module’s name introduces a _package_ — a namespace that holds the names defined in it. Earlier, in [the section about containers](/advanced/containers), you met `WHO`, which returns the `Stash` (the symbol table) of a package. Module introspection puts that to use.

The examples below use the `Greeting` module built up in the earlier topics — an exported subroutine and a shared `our` variable:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

The package of a module is written with a trailing `::`. Adding `.keys` lists the names it contains:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

The `Greeting` module from the earlier topics defines an `our` variable, `$version`, so its package contains that name — with the sigil included. Next to it sits `EXPORT`, which may look surprising. It is a package Raku creates automatically to hold everything a module marks `is export`, such as the `hello` subroutine. An exported name therefore does _not_ appear directly in the package; it lives inside that `EXPORT` sub-package. (The keys come back in no fixed order, so the example sorts them for a stable result.)

You can also look a name up in the package by using it as a key. This reaches the same value as the qualified `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Listing what a module exports

The `EXPORT` package seen above is where the exported names actually live, so you can list them by looking one level deeper. Exports without a tag go into the `DEFAULT` group (see [Export tags](/advanced/modules-basics/export-tags)), and its `.keys` are the exported routines:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Each key is an exported name with its sigil — here the single subroutine `&hello`, shown with the `&` that marks a routine. This is how you discover what a module makes available to its users without reading its source: ask its `EXPORT::DEFAULT` package what it holds.

Introspecting a package this way is handy when you want to discover what a module provides, or to reach its names dynamically rather than writing each one out in the source code.

{% include nav.html %}
