---
title: The solution of ’A dynamic variable‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 You can find the source code in the file [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Output

```
running as guest
running as admin
```

## Comments

1. The `*` twigil makes `$*user` dynamic. `whoami` never takes it as a parameter — it finds the value by looking outward through the call stack, so the first call reports the default `guest`.

1. The inner block redeclares `$*user` as `admin` for the duration of that block. The *same* `whoami` now sees `admin`, because dynamic lookup follows whoever is currently on the stack. Overriding a dynamic variable in a scope is how you grant elevated context to everything called from it — without changing `whoami` at all.

{% include nav.html %}
