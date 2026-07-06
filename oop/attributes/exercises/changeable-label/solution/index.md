---
title: The solution of ’A changeable label‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 You can find the source code in the file [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Output

```
draft (revised)
```

## Comments

1. The `is rw` trait makes the accessor return a writable container, so it can appear on the left of an assignment.

1. Because it is writable, the compound operator `~=` works on it too: `$l.text ~= ' (revised)'` reads the current text, concatenates the suffix, and stores the result back — all through the same accessor.

{% include nav.html %}
