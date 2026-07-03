---
title: The solution of ’A shout module‘
---

{% include menu.html %}

Here is a possible solution to the task. It uses two files.

## Code

The module, `Shouter.rakumod`:

```raku
unit module Shouter;

sub shout($s) is export {
    $s.uc
}
```

The program, `shout.raku`:

```raku
use Shouter;

say shout('hi');
```

🦋 You can find both source files in the [exercises/advanced/modules-basics/shout-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/shout-module) directory.

## Output

```console
$ raku -I. shout.raku
HI
```

## Comments

1. The `is export` trait makes `shout` visible to any program that uses the module.

1. The `.uc` method returns the upper-case version of the string.

{% include nav.html %}
