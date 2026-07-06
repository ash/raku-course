---
title: The solution of ’A sized box‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 You can find the source code in the file [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Output

```
size is 10
True
```

## Comments

1. The role provides the `describe` method, and the class composes it with `does Sized`. The method relies on `self.size`, which is supplied by the `Box` class — the role and the class fit together to form the complete object.

1. Because `Box` does the role, the smartmatch `$b ~~ Sized` is `True`: an object is recognised as having every role its class composes, which is useful for checking what an object can do before calling a role’s method.

{% include nav.html %}
