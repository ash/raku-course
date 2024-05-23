---
title: Commentarii multi-lineae
---

{% include menu.html %}

Simul ac vis relinquere commentarium quod maius est quam una linea, potes eligere vel habere pauca commentaria unius lineae vel unum commentarium multi-lineae.

Commentarii multi-lineae incipiunt cum combinatione duorum characterum ``#` `` et sequuntur par characterum includentium `( )`, `{ }`, `[ ]`, vel `< >` vel eorum exemplaria repetita: `(( ))`, `[[[ ]]]`, etc.

Exempli gratia:

```raku
my $name;
#`( Rogaturi sumus utentem
ut nomen suum primum inserat et deinde
input in variabili servet. )

$name = prompt 'Quod est nomen tuum? ';
#`{ Programma nunc exspectat
donec utens nomen inserat
et premet Enter. }

dic $name; #`( Et nunc possumus illud imprimere )
```

{% include nav.html %}