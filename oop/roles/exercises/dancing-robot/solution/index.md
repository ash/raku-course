---
title: The solution of ’A dancing robot‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
role Dancing {
    method dance {
        'spinning around';
    }
}

class Robot {
    method speak {
        'beep';
    }
}

my $plain   = Robot.new;
my $dancing = Robot.new but Dancing;

say $plain.speak;
say $dancing.speak;
say $dancing.dance;
```

🦋 You can find the source code in the file [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Output

```
beep
beep
spinning around
```

## Comments

1. Unlike the earlier examples, `Dancing` does not replace an existing method — it brings a brand-new `dance` method that `Robot` knows nothing about.

1. `Robot.new but Dancing` mixes the role into a single object at run time, so `$dancing` can both `speak` (from the class) and `dance` (from the role). The plain `$plain` only ever learnt `speak`.

1. The extra ability belongs to that one object, not to the `Robot` class. Calling `$plain.dance` would be an error, because `$plain` never received the role.

{% include nav.html %}
