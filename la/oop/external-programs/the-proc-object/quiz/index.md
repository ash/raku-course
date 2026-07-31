---
title: Quiz — Obiectum Proc
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | errorem

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` est numerus integer quem programma reddidit — hic interpres iussus est `exit 2` agere, itaque est `2`. Programma non iacit: `Proc` deficiens in `$proc` servatur et per `.exitcode` inspicitur, et effectum inspicere pro tractato habetur. (Exceptio solum oriretur si `Proc` deficiens non inspectum abiceretur.)

</div>

{% include nav.html %}
