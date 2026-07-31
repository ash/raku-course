---
title: Viktorīna — Proc objekts
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | kļūda

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` ir vesels skaitlis, ko programma atgrieza — šeit čaulai tika likts `exit 2`, tāpēc tas ir `2`. Programma neizmet izņēmumu: neveiksmīgais `Proc` glabājas `$proc` un tiek izpētīts ar `.exitcode`, un rezultāta apskatīšana skaitās tā apstrādāšana. (Izņēmums rastos tikai tad, ja neveiksmīgs `Proc` tiktu izmests nepārbaudīts.)

</div>

{% include nav.html %}
