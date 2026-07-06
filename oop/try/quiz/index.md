---
title: 'Quiz — `try`'
---

{% include menu.html %}

What does the following program print?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside then outside
0 | Boom!
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Two things happen here. First, `die` immediately aborts the rest of the `try` block, so the `say 'inside'` line is never reached — nothing is printed from inside the block. Second, because `try` catches the exception, the program itself does not stop: execution continues past the block, and `say 'outside'` runs normally. So the only line printed is `outside`. (`$r` would be undefined, and the message `Boom!` would be waiting in `$!` if you looked.)

</div>

{% include nav.html %}
