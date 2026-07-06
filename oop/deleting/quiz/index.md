---
title: 'Quiz — Deleting files'
---

{% include menu.html %}

What does the following program print?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | an error
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` only removes an **empty** directory. Here, `data` still contains `x.txt`, so `rmdir` removes nothing and leaves the directory in place. `.e` therefore still reports `True`. To delete the directory you would first remove its contents (for example with `.unlink for 'data'.IO.dir`) and then call `rmdir`.

</div>

{% include nav.html %}
