---
title: Kvizo — La objekto Proc
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | eraron

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` estas la entjero, kiun la programo redonis — ĉi tie al la ŝelo estis dirite `exit 2`, do ĝi estas `2`. La programo ne ĵetas: la malsukcesa `Proc` estas konservita en `$proc` kaj inspektita per `.exitcode`, kaj rigardi la rezulton kalkuliĝas kiel trakti ĝin. (Escepto leviĝus nur, se malsukcesa `Proc` estus forĵetita nekontrolita.)

</div>

{% include nav.html %}
