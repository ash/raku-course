---
title: The solution of ’A Pod section‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 You can find the source code in the file [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Output

```
2
```

## Comments

1. `$=pod` holds the file’s Pod as a list of blocks; `$=pod[0]` is the single `=begin pod` block.

1. Its `.contents` are the blocks nested inside it — the `=head1` heading and the paragraph — so `.contents.elems` is `2`. Walking into the structure like this is how a program reads its own documentation as data.

{% include nav.html %}
