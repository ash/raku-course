---
title: The solution of ’Inherit a grammar‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 You can find the source code in the file [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Output

```
True
True
False
```

## Comments

1. Both `Dog is Animal` and `Cat is Animal` inherit the `TOP` token from the base unchanged; each supplies only its own `sound`.

1. So one base grammar is extended two different ways. `Dog` matches only `woof` and `Cat` only `meow` — which is why `Dog.parse('meow')` fails: a dog keeps its own overridden `sound`, exactly as overridden methods behave on objects.

{% include nav.html %}
