---
title: The solution of ’Kept or broken‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 You can find the source code in the file [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Output

```
Kept
```

## Comments

1. After the block finishes successfully, the promise is _kept_.

1. `.status` reports this as `Kept`. Had the block thrown an exception, the status would be `Broken` instead.

{% include nav.html %}
