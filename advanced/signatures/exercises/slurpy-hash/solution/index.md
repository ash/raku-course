---
title: The solution of ’Slurpy named arguments‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 You can find the source code in the file [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Output

```
Anna: colour=red, size=5
```

## Comments

1. The fixed positional parameter `$name` is filled first, and the slurpy `*%opts` then gathers every remaining named argument into a hash.

1. `%opts.sort` orders the pairs by key, so the output is deterministic — `colour` comes before `size`. The `.map` turns each pair into a `key=value` string with `.key` and `.value`, and `.join(', ')` glues them together.

1. The final string interpolates `$name` and the assembled `$details`, producing `Anna: colour=red, size=5`.

{% include nav.html %}
