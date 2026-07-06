---
title: Deleting files and directories
---

{% include menu.html %}

Just as `spurt` and `mkdir` create things on disk, two routines remove them.

The `unlink` routine deletes a file:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` deletes the named file. Like the other file-system routines, it also has a method form on a path object — `'temp.txt'.IO.unlink`.

Deletion is immediate and permanent: there is no wastebasket to recover from. Note that after a file is gone, you must test for it with `.e` (existence) rather than `.f`, because the type tests `.f` and `.d` throw when the path is not there.

The `rmdir` routine removes a directory, but only an **empty** one:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

If the directory still contains something, `rmdir` removes nothing and leaves it in place. So to delete a directory that holds files, you empty it first and then remove it:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` lists the directory’s entries (the previous topic covered it), and calling `.unlink` on each removes them. Once the directory is empty, `rmdir` can take it away. (This flat loop assumes the directory holds only files; a tree with nested sub-directories would need to recurse into them first.)

{% include nav.html %}
