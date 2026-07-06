---
title: Listing a directory
---

{% include menu.html %}

The `dir` routine returns the entries of a directory — each as a path object. Their order is not fixed, so it is common to sort the result for predictable output.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

This prints the names of the files in the `box` directory, in order:

```
a.txt
b.txt
```

Each entry is a full path object; the `basename` method gives just the final name, without the directory part. From a path object you can ask all the same questions as before — `.f`, `.d`, `.e` — so you can, for instance, walk through a directory and pick out only the files.

{% include nav.html %}
