---
title: The solution of ’Load at run time‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

The program, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 You can find both source files in the [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime) directory.

## Output

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Comments

1. `require` loads the module at run time rather than at compile time. On its own it imports nothing, which is why a bare `hello` would be unknown.

1. The `<&hello>` list tells `require` to import that one symbol, so after the statement `hello('Sam')` can be called directly, giving `Hello, Sam!`.

1. This is what `require` is *for*: because it runs at run time, it can sit inside an `if`. When `--quiet` is given, that branch is skipped and the module is never loaded — something a compile-time `use` could not avoid.

{% include nav.html %}
