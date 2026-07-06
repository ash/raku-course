---
title: 'Quiz — Reading lines'
---

{% include menu.html %}

A file `n.txt` contains three lines. How many times does the body of this loop run?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | once for each character

{% include quiz.html %}

{% include nav.html %}
