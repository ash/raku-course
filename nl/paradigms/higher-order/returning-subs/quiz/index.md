---
title: 'Quiz — Hogere-ordefuncties'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`prefixer('Hi, ')` geeft een subroutine terug die het voorvoegsel onthoudt en het vooraan plakt bij wat ze ook krijgt. In `&hi` bewaard en met `'Bob'` aangeroepen geeft ze `Hi, Bob` terug — een teruggegeven subroutine werkt net zo goed met strings als met getallen.

</div>

{% include nav.html %}
