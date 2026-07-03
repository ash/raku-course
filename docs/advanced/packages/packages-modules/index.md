---
title: Packages and modules
---

{% include menu.html %}

The `package` keyword introduces a namespace. Anything declared inside it with `our` becomes part of that namespace and can be reached from outside through the package’s name and the `::` separator:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

The variable is reached as `$Maths::pi` — the sigil, then the package name, then the variable name. A subroutine is called as `Maths::double(...)`.

Both `package` and `module` create a namespace; they differ in what else they do. A `module` is the usual choice for a unit of reusable code, while a plain `package` is just the namespace with nothing extra. (A `class`, which you will meet in [the next part](/oop), creates a namespace too and adds object-oriented machinery on top.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

So the namespace you have been getting from `module` is the same mechanism a `package` provides on its own. Choosing between them is mostly about intent: `module` for libraries, `package` for a bare namespace — and, once you reach objects, `class` for types.

{% include nav.html %}
