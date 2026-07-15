---
title: 'Quiz — Higher-order functions'
---

{% include menu.html %}

What does the following program print?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` returns a subroutine that remembers the prefix and prepends it to whatever it is given. Stored in `&hi` and called with `'Bob'`, it returns `Hi, Bob` — a returned subroutine works just as well with strings as with numbers.

</div>

{% include nav.html %}
