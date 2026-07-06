---
title: Working with files
---

{% include menu.html %}

The simplest way to work with a file is to read or write it all at once.

The `spurt` routine writes a string to a file, creating the file (or replacing its contents if it already exists):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

The `slurp` routine reads the whole content of a file back into a string:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Together, `spurt` and `slurp` let you save data and load it again with two short calls. (`print` is used here rather than `say`, because the text already ends with a newline.)

These whole-file operations are ideal when a file is small enough to hold in memory comfortably. For larger files, or when you want to process a file line by line, you use a [file handle](/oop/file-handles), covered at the end of this section. The next topic shows how to add to a file instead of replacing it.

{% include nav.html %}
