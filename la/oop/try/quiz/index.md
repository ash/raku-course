---
title: 'Quiz — `try`'
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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
0 | inside, deinde outside
0 | Boom!
0 | errorem

{% include quiz.html %}

<div class="extended-explanation">

Duo hic fiunt. Primum, `die` reliquam clausulae `try` partem statim abrumpit, itaque linea `say 'inside'` numquam attingitur — nihil ex clausula imprimitur. Deinde, quia `try` exceptionem capit, ipsum programma non sistit: exsecutio ultra clausulam pergit, et `say 'outside'` more solito currit. Itaque sola linea impressa est `outside`. (`$r` indefinitus esset, et nuntius `Boom!` in `$!` exspectaret si inspiceres.)

</div>

{% include nav.html %}
