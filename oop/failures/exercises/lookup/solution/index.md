---
title: The solution of ’Lookup or not found‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 You can find the source code in the file [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Output

```
not found
reason: no such key
```

## Comments

1. `lookup('z')` calls `fail`, so it returns an undefined `Failure`.

1. Because the result is undefined, the program prints `not found` rather than trying to use the failed value.

1. A `Failure` still carries the exception that describes what went wrong. `$r.exception` retrieves it — which also marks the failure as handled, so it will not blow up later — and `.message` reads the text passed to `fail`, `no such key`.

{% include nav.html %}
