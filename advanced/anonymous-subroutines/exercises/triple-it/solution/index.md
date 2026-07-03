---
title: The solution of ’Triple it‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 You can find the source code in the file [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Output

```
21
```

## Comments

1. The pointy block uses `$factor`, a variable from the surrounding scope, even though it is only a parameter `$x` short. Capturing such variables is what makes it a closure.

1. With `$factor` equal to `3`, calling `$scale(7)` gives `21`. Change `$factor` and the same block would scale by the new value:

```raku
$factor = 5;
say $scale(7); # 35
```

Because the closure captures the *variable* rather than its value at the time it was written, the later call sees the updated `$factor` and returns `35`.

{% include nav.html %}
