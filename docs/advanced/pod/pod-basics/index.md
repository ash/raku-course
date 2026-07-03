---
title: Pod basics
---

{% include menu.html %}

Pod documentation lives in your source file, set off by lines that begin with `=`. The simplest way to write a block of it is between `=begin pod` and `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Inside, directives describe the structure:

* `=head1`, `=head2`, … — headings at different levels
* an ordinary paragraph — just text on its own lines
* `=item` — an item in a bulleted list

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

The `=head1` line is a top-level heading; the three `=item` lines form a list. Pod sits alongside your code without affecting it — the compiler ignores it when running the program, but can extract and render it on demand, as the last topic shows.

{% include nav.html %}
