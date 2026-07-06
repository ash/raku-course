---
title: Working with directories
---

{% include menu.html %}

To work with the file system itself — checking what exists and creating directories — Raku uses _path objects_. Any string can be turned into one with the `.IO` method, and the path object then answers questions about that path.

The most common questions are whether a path exists, and what kind of thing it is:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` tests existence, `.f` tests for a regular file, and `.d` tests for a directory.

To create a new directory, use `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

The next topic shows how to list what a directory contains.

{% include nav.html %}
