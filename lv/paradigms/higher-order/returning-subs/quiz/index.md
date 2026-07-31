---
title: Viktorīna — Augstākas kārtas funkcijas
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`prefixer('Hi, ')` atgriež apakšprogrammu, kas atceras priedēkli un pieliek to priekšā tam, ko tai iedod. Saglabāta `&hi` un izsaukta ar `'Bob'`, tā atgriež `Hi, Bob` — atgriezta apakšprogramma ar virknēm darbojas tikpat labi kā ar skaitļiem.

</div>

{% include nav.html %}
