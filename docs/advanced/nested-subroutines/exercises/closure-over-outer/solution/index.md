---
title: The solution of ’Closing over the outer‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 You can find the source code in the file [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Output

```
Hello, Anna!
```

## Comments

1. `message` takes no arguments, yet it can use `$name`. A nested subroutine closes over the lexical variables of the subroutine that contains it, so the outer `$name` is in scope.

1. When `greet('Anna')` runs, `$name` is `'Anna'`, so `message` returns `Hello, Anna!`. This sharing of the enclosing scope is what makes nested helpers more than just hidden functions.

{% include nav.html %}
