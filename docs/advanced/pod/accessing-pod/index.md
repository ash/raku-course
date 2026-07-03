---
title: Accessing the Pod
---

{% include menu.html %}

Besides rendering it, a program can read its own Pod from **inside**, while it runs. The special variable `$=pod` holds the Pod of the current file as a list of block objects, so a program can inspect its own documentation:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` here has one element — the `pod` block — and you can walk into it to read headings, paragraphs, and items as data. This is what tools that generate documentation, or test that it is present, rely on. Whether rendered with `--doc` or read through `$=pod`, the documentation is a first-class part of the program, not a comment to be stripped away.

{% include nav.html %}
