---
title: The solution of ’A custom trait‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 You can find the source code in the file [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Output

```
admin
```

## Comments

1. The trait is a `multi sub trait_mod:<is>` whose named parameter `:$role!` triggers it for `is role(...)`. Unlike a presence-only trait, this one *receives* the argument: `is role('admin')` binds `'admin'` to `$role`.

1. The body stores that value under the subroutine’s name. Reading `%role<login>` back afterwards gives `admin`. (Traits run at compile time, so the entry is already there by the time the program runs.)

{% include nav.html %}
